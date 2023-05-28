import React, {
  Fragment,
  FunctionComponent,
  useEffect,
  useRef,
  useState,
} from "react";

import MagnifyingGlass from "icons/MagnifyingGlass";

import debounce from "@/utils/debounce";
import { useAppSelector } from "@/store/store";

interface ISearchInputProps {
  onSearch: (str: string) => void;
}

const SearchInput: FunctionComponent<ISearchInputProps> = ({ onSearch }) => {
  const search = useAppSelector((state) => state.search.value);
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>(search);
  const isMounted = useRef(0);

  useEffect(() => {
    if (isMounted.current > 1) {
      debounce(onSearch)(searchText);
    } else {
      isMounted.current++;
    }
  }, [searchText]);

  useEffect(() => {
    const clickHandler = (e: MouseEvent) => {
      if (e && e.target && (e.target as HTMLElement).className) {
        if (
          String((e.target as HTMLElement)?.className)?.includes("searchMore")
        ) {
          setIsFocus(true);
        } else {
          setIsFocus(false);
        }
      }
    };
    document.addEventListener("click", clickHandler);

    return () => {
      document.removeEventListener("click", clickHandler);
    };
  }, []);

  return (
    <Fragment>
      <div className="flex flex-row gap-2 border rounded-2xl hover:shadow-lg transition items-center pl-3 overflow-hidden searchMore border-gray-300 h-10 mb-2">
        <label htmlFor="searchInput searchMore">
          <span className="pointer-events-none">
            <div className="transition">
              <MagnifyingGlass
                width={"14"}
                fill={isFocus ? "#002E81" : "#cccccc"}
              />
            </div>
          </span>
        </label>
        <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          id="searchInput"
          type="text"
          placeholder="Поиск"
          className={`w-[288px] h-7 pr-1 text-xs  outline-none transition-all duration-300 focus:placeholder-brandLight ${
            isFocus && "lg:w-[288px]"
          } searchMore`}
        />
        <button
          aria-label="Close"
          className={`relative right-3 transition-opacity duration-500 ${
            searchText ? "opacity-100" : "opacity-0 cursor-default"
          }`}
          onClick={() => setSearchText("")}
        >
          X
        </button>
      </div>
    </Fragment>
  );
};

export default React.memo(SearchInput);
