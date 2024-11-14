interface Props {
  totalPage: number;
  currentPage: number;
  pageSize: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ totalPage, currentPage, onPageChange }: Props) => {
  return (
    <>
      <div className="flex justify-end gap-2">
        <div>
          <button
            // onClick={goToPreviousPage}
            // disabled={currentPage === 1}
            className="px-3 py-1 bg-[#f0f8ff] rounded-md hover:bg-gray-200 disabled:opacity-50"
          >
            Previous
          </button>
        </div>
        <div className="flex gap-2">
          {[...Array(totalPage)].map((_, index) => (
            <button
              key={index}
              onClick={() => onPageChange(index + 1)}
              className={`px-3 py-1  rounded-md bg-[#f0f8ff] ${
                currentPage === index + 1
                  ? "text-[#0c66e4]"
                  : "hover:bg-gray-200"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <div>
          <button
            // onClick={goToPreviousPage}
            // disabled={currentPage === 1}
            className="px-3 py-1 bg-[#f0f8ff] rounded-md hover:bg-gray-200 disabled:opacity-50"
          >
            Previous
          </button>
        </div>
      </div>
    </>
  );
};

export default Pagination;
