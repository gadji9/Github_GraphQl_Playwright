import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { Link } from "react-router-dom";

import GridTable, { GridTableCell } from "components/UI/GridTable";
import SearchInput from "components/UI/Inputs/SearchInput/SearchInput";
import Pagination from "components/UI/Pagination";

import { useAppDispatch, useAppSelector } from "@/store/store";
import {
  setRepositories,
  setTotalCount,
} from "@/store/features/repositories/repositories.slice";
import { setSearch } from "@/store/features/search/search.slice";
import { setPage } from "@/store/features/page/page.slice";

import { REPOSITORIES_PER_PAGE } from "@/constants";

import { Repository } from "@/types/global";

import { useLazyQuery } from "@apollo/client";
import {
  GET_OWN_REPOSITORIES,
  GET_SEARCH_REPOSITORIES,
} from "@/graphQl/Queries/getRepositories";

const TableFields = {
  name: {
    label: "Название",
    sortBy: "sort_name",
    component: (name: string, index: number, item: any) => (
      <GridTableCell className="flex-col text-xs cursor-pointer">
        <Link to={item.id} className="text-cyan-700 text-center">
          {name}
        </Link>
      </GridTableCell>
    ),
  },
  primaryLanguage: {
    label: "Основной язык",
    sortBy: "sort_primary_language",
    component: (primaryLanguage: { name: string }) => (
      <GridTableCell className="flex-col text-xs">
        <p>{primaryLanguage.name}</p>
      </GridTableCell>
    ),
  },
  pushedAt: {
    label: "Последний коммит",
    sortBy: "sort_last_commit",
    component: (pushedAt: string) => (
      <GridTableCell className="flex-col text-xs">
        <p>{pushedAt}</p>
      </GridTableCell>
    ),
  },
  url: {
    label: "Ссылка",
    sortBy: "sort_link",
    component: (url: string) => (
      <GridTableCell className="flex-col text-xs">
        <p>{url}</p>
      </GridTableCell>
    ),
  },
  description: {
    label: "Описание",
    sortBy: "sort_link",
    component: (description: string) => (
      <GridTableCell className="flex-col text-xs ">
        <p className="max-w-xl max-h-8 text-ellipsis overflow-hidden whitespace-nowrap text-center">
          {description}
        </p>
      </GridTableCell>
    ),
  },
};

const RepositoriesTable: FunctionComponent = () => {
  const repositories = useAppSelector(
    (state) => state.repositories.repositories
  );
  const totalCount = useAppSelector((state) => state.repositories.totalCount);
  const search = useAppSelector((state) => state.search.value);
  const page = useAppSelector((state) => state.page.value);

  const dispatch = useAppDispatch();

  const [startCursor, setStartCursor] = useState<string | undefined>();
  const [endCursor, setEndCursor] = useState<string | undefined>();

  const onSearchCallback = useCallback(onSearch, []);

  const [getOwnRepositories, { loading: ownLoading, data: ownData }] =
    useLazyQuery(GET_OWN_REPOSITORIES);

  const [getSearchRepositories, { loading: searchLoading }] = useLazyQuery(
    GET_SEARCH_REPOSITORIES,
    {
      notifyOnNetworkStatusChange: true,
    }
  );

  useEffect(() => {
    if (page > 1) {
      return;
    }
    if (search.length) {
      onSearch(search);

      return;
    }
    showOwnRepositories({
      first: REPOSITORIES_PER_PAGE,
    });
  }, []);

  function onSearch(str: string) {
    dispatch(setSearch(str));

    if (str.length === 0) {
      reset();
      return;
    }

    showSearchRepositories({
      repositoryName: str,
      first: REPOSITORIES_PER_PAGE,
    });

    dispatch(setPage(1));
  }

  const onPageChange = (pageNumber: number) => {
    const vars = getVarsForPagination(pageNumber);

    if (search.length === 0) {
      showOwnRepositories(vars);
      dispatch(setPage(pageNumber));
      return;
    }
    showSearchRepositories({
      repositoryName: search,
      ...vars,
    });

    dispatch(setPage(pageNumber));
  };

  const reset = () => {
    if (ownData) {
      applyOwnData(ownData); //if we have cached own repositories, no need to make another api request
    } else {
      showOwnRepositories({ first: REPOSITORIES_PER_PAGE });
    }

    dispatch(setPage(1));
    return;
  };

  const showOwnRepositories = (vars?: any) => {
    getOwnRepositories({
      variables: vars,
      onCompleted: (data) => {
        applyOwnData(data);
      },
    });
  };

  const showSearchRepositories = (vars?: any) => {
    getSearchRepositories({
      variables: vars,
      onCompleted: (data) => {
        applySearchData(data);
      },
    });
  };

  const getVarsForPagination = (pageNumber: number) => {
    let vars = {};

    if (pageNumber <= page) {
      vars = {
        before: startCursor,
        last: REPOSITORIES_PER_PAGE,
      };
    } else {
      vars = {
        after: endCursor,
        first: REPOSITORIES_PER_PAGE,
      };
    }

    return vars;
  };

  const applyOwnData = (data: any) => {
    if (data) {
      dispatch(setRepositories(data.viewer.repositories.nodes as Repository[]));
      setStartCursor(data.viewer.repositories.pageInfo.startCursor || "");
      setEndCursor(data.viewer.repositories.pageInfo.endCursor || "");
      dispatch(setTotalCount(data.viewer.repositories.totalCount));
    }
  };

  const applySearchData = (data: any) => {
    if (data) {
      dispatch(setRepositories(data.search.nodes as Repository[]));
      setStartCursor(data.search.pageInfo.startCursor || "");
      setEndCursor(data.search.pageInfo.endCursor || "");
      dispatch(setTotalCount(data.search.repositoryCount));
    }
  };

  return (
    <div className="w-full">
      <div className="w-full flex">
        <div className="w-1/2">
          <h1 className="text-2xl ml-3">Репозитории</h1>{" "}
        </div>
        <div className="w-full flex justify-end">
          <SearchInput onSearch={onSearchCallback} />
        </div>
      </div>
      <GridTable
        data={repositories || []}
        fields={TableFields}
        isLoading={ownLoading || searchLoading}
      />
      <Pagination
        totalPages={Math.ceil(totalCount / REPOSITORIES_PER_PAGE)}
        setPage={onPageChange}
        activePage={page}
        alignment={"justify-end"}
      />
    </div>
  );
};

export default RepositoriesTable;
