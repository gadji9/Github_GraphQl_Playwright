import { FunctionComponent, useEffect, useState } from "react";

import ArrowRight from "@/assets/icons/ArrowRight";
import ArrowLeft from "@/assets/icons/ArrowLeft";

interface IPagination {
  totalPages: number;
  setPage: (page: number) => void;
  activePage: number;
  disabled?: boolean;
  alignment?: "justify-end" | "justify-start";
}

const Pagination: FunctionComponent<IPagination> = ({
  totalPages = 1,
  setPage,
  disabled = false,
  activePage = 1,
  alignment = "justify-start",
}) => {
  const [paginationContent, setPaginationContent] = useState<Array<number>>([]);
  const paginationClick = (pageNum: number) => {
    if (
      disabled ||
      pageNum === activePage ||
      pageNum > totalPages ||
      pageNum < 1 ||
      Math.abs(activePage - pageNum) != 1
    ) {
      return;
    }

    setPage(pageNum);
  };

  useEffect(() => {
    const paginationUpdate: Array<number> = [];

    if (totalPages <= 8) {
      for (let i = 1; i <= totalPages; i++) {
        paginationUpdate.push(i);
      }
    } else if (activePage <= 3) {
      for (let i = 1; i <= 5; i++) {
        paginationUpdate.push(i);
      }

      paginationUpdate.push(NaN, totalPages);
    } else if (activePage >= totalPages - 4) {
      paginationUpdate.push(1, NaN);

      for (let i = totalPages - 4; i <= totalPages; i++) {
        paginationUpdate.push(i);
      }
    } else {
      paginationUpdate.push(
        1,
        NaN,
        activePage - 1,
        activePage,
        activePage + 1,
        NaN,
        totalPages
      );
    }
    setPaginationContent(paginationUpdate);
  }, [totalPages, activePage]);
  return (
    <div className={`flex flex-row w-full ${alignment} pr-4 pl-4`}>
      <div className="flex flex-row gap-1 px-2 py-5 items-center">
        <div
          className={activePage === 1 ? "opacity-30" : "cursor-pointer"}
          onClick={() => paginationClick(activePage - 1)}
        >
          <ArrowLeft width="20" height="20" />
        </div>
        {paginationContent.map((pageNum, index) =>
          isNaN(pageNum) ? (
            <div
              key={index}
              className="w-[32px] h-[32px] text-[#3072C4] flex items-center justify-center cursor-pointer"
            >
              ...
            </div>
          ) : (
            <div
              key={index}
              onClick={() => paginationClick(pageNum)}
              className={
                "min-w-[32px] h-[32px] text-[#3072C4] flex items-center justify-center " +
                (pageNum === activePage &&
                  " bg-[#E5E5E5] rounded-full text-black") +
                (Math.abs(activePage - pageNum) === 1
                  ? " cursor-pointer"
                  : " cursor-default") +
                (disabled ? " opacity-50" : "")
              }
            >
              {pageNum}
            </div>
          )
        )}
        <div
          className={
            activePage === totalPages ? "opacity-30" : "cursor-pointer"
          }
          onClick={() => paginationClick(activePage + 1)}
        >
          <ArrowRight width="20" height="20" />
        </div>
      </div>
    </div>
  );
};

export default Pagination;
