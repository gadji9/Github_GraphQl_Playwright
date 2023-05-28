import React, { FunctionComponent } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { GET_REPOSITORY } from "@/graphQl/Queries/getRepository";

const RepositoryBlock: FunctionComponent = () => {
  const params = useParams();

  const { data }: { data: any } = useQuery(GET_REPOSITORY, {
    variables: {
      id: params.id!,
    },
  });

  if (!data) return <div></div>;

  return (
    <>
      <div className="h-1/2 flex gap-10">
        <div className="border w-80 h-full">
          <img width={320} src={data?.node?.owner.avatarUrl} alt="" />
        </div>
        <div className="flex flex-col gap-10 leading-7 max-w-xl">
          <div>
            <p>Владелец: </p>
            <div className="pl-2">Имя: {data.node.owner.name}</div>
            <div className="pl-2">
              Ссылка:{" "}
              <Link to={data.node.owner.url} className="text-cyan-700">
                {data.node.owner.url}
              </Link>
            </div>
          </div>
          <div>
            <p>Репозиторий: </p>
            <div className="pl-2">Название: {data.node.name}</div>
            <div className="pl-2">
              Ссылка:{" "}
              <Link to={data.node.url} className="text-cyan-700">
                {data.node.url}
              </Link>
            </div>
            <div className="pl-2">
              Последние изменения: {data.node.pushedAt}
            </div>
            <div className="pl-2">
              Используемые языки:{" "}
              {data.node.languages.nodes.map(
                (node: any, index: number, arr: any[]) =>
                  index === arr.length - 1 ? node.name : node.name + ", "
              )}
            </div>
            <div className="pl-2">
              Основной язык: {data.node.primaryLanguage.name}
            </div>
            <div className="pl-2">
              Описание: {data.node.description || "Отсутствует"}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RepositoryBlock;
