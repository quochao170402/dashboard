import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

interface Props {
  currentPage: number;
  totalItems: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ totalItems, currentPage, onPageChange }: Props) => {
  const [totalPage, setTotalPage] = useState(0);

  const [searchParams, setSearchParams] = useSearchParams();
  const queryPageSize = searchParams.get("pageSize");
  useEffect(() => {
    if (queryPageSize === null || queryPageSize === "0") {
      setTotalPage(1);
    } else {
      const page = Math.ceil(totalItems / +queryPageSize);
      setTotalPage(page === 0 ? 1 : page);
    }
  }, [queryPageSize, totalItems]);

  useEffect(() => {
    setSearchParams({ pageIndex: currentPage.toString() });
  }, [currentPage]);

  const handleGoToPreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleGoToNextPage = () => {
    if (currentPage < totalPage) {
      onPageChange(currentPage + 1);
    }
  };

  const getPaginationItems = () => {
    if (totalPage <= 3) {
      // Case 1: Show all pages if 3 or fewer
      return [...Array(totalPage).keys()].map((i) => i + 1);
    }

    const pages: (number | string)[] = [];

    if (totalPage > 5) {
      // Case 3: Show ellipses for more than 5 pages
      pages.push(1); // Always show the first page

      if (currentPage > 3) {
        pages.push("..."); // Ellipses before current page for skipped pages
      }

      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(totalPage - 1, currentPage + 1);

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i); // Show current, one before, and one after
      }

      if (currentPage < totalPage - 2) {
        pages.push("..."); // Ellipses after current page for skipped pages
      }

      pages.push(totalPage); // Always show the last page
    } else {
      // Case 2: Show range for 4-5 pages
      pages.push(1); // First page

      if (currentPage > 2) {
        pages.push(currentPage - 1);
      }

      pages.push(currentPage); // Current page

      if (currentPage < totalPage - 1) {
        pages.push(currentPage + 1);
      }

      pages.push(totalPage); // Last page
    }

    return pages;
  };

  const paginationItems = getPaginationItems();

  return (
    <>
      <div className="h-10 flex justify-center gap-2 items-center">
        <button
          onClick={handleGoToPreviousPage}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-none rounded-md"
        >
          <ChevronLeft size={27} />
        </button>

        {paginationItems.map((page, index) =>
          typeof page === "number" ? (
            <button
              key={index}
              onClick={() => onPageChange(page)}
              className={`px-3 py-1 rounded-md bg-none border ${
                currentPage === page
                  ? "text-[#0c66e4] border-[#0c66e4]"
                  : "hover:bg-gray-200 border-[#f0f8ff]"
              }`}
            >
              {page}
            </button>
          ) : (
            <button
              key={index}
              className="px-3 py-1 rounded-md bg-none cursor-default"
              disabled
            >
              ...
            </button>
          )
        )}

        <button
          onClick={handleGoToNextPage}
          disabled={currentPage === totalPage}
          className="px-3 py-1 bg-none rounded-md"
        >
          <ChevronRight size={27} />
        </button>
      </div>
    </>
  );
};

export default Pagination;
