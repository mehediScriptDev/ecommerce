export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const handlePrev = () => onPageChange(Math.max(1, currentPage - 1));
  const handleNext = () => onPageChange(Math.min(totalPages, currentPage + 1));

  return (
    <div className="flex items-center justify-center gap-1.5 mt-10">
      {/* Prev */}
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:border-custom hover:text-custom transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Pages */}
      {[1, 2, 3].map((n) => (
        <button
          key={n}
          onClick={() => onPageChange(n)}
          className={`w-8 h-8 rounded-lg text-sm font-medium border transition-all
          ${
            currentPage === n
              ? "bg-custom border-custom text-white"
              : "bg-white border-gray-200 text-gray-600 hover:border-custom"
          }`}
        >
          {n}
        </button>
      ))}

      <span className="text-gray-400 text-sm px-1">...</span>

      <button
        onClick={() => onPageChange(8)}
        className={`w-8 h-8 rounded-lg text-sm font-medium border transition-all
        ${
          currentPage === 8
            ? "bg-custom border-custom text-white"
            : "bg-white border-gray-200 text-gray-600 hover:border-custom"
        }`}
      >
        8
      </button>

      {/* Next */}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:border-custom hover:text-custom transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}