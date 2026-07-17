"use client";

interface PaginationProps {
  page: number;

  totalPages: number;

  onPageChange: (page: number) => void;
}

export default function Pagination({
  page,
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) {
    return null;
  }

  const pages: (number | "...")[] = [];

  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
  } else if (page <= 4) {
    pages.push(1, 2, 3, 4, 5, "...", totalPages);
  } else if (page >= totalPages - 3) {
    pages.push(
      1,
      "...",
      totalPages - 4,
      totalPages - 3,
      totalPages - 2,
      totalPages - 1,
      totalPages,
    );
  } else {
    pages.push(1, "...", page - 1, page, page + 1, "...", totalPages);
  }

  return (
    <div
      className="
        mt-6
        flex
        items-center
        justify-between
      "
    >
      <p
        className="
          text-sm
          text-gray-500
        "
      >
        Page {page} of {totalPages}
      </p>

      <div
        className="
          flex
          items-center
          gap-2
        "
      >
        <button
          type="button"
          onClick={() => onPageChange(page - 1)}
          disabled={page === 1}
          className="
            cursor-pointer
            rounded-lg
            border
            border-gray-300
            px-4
            py-2
            text-sm
            font-medium
            text-gray-700
            transition-colors
            hover:border-rose-300
            hover:bg-rose-50
            disabled:cursor-not-allowed
            disabled:opacity-50
          "
        >
          Previous
        </button>

        {pages.map((item, index) =>
          item === "..." ? (
            <span
              key={`ellipsis-${index}`}
              className="
                px-1
                text-gray-400
              "
            >
              ...
            </span>
          ) : (
            <button
              key={item}
              type="button"
              onClick={() => onPageChange(item)}
              className={`
                flex
                h-10
                min-w-10
                cursor-pointer
                items-center
                justify-center
                rounded-lg
                border
                px-3
                text-sm
                font-medium
                transition-colors
                ${
                  page === item
                    ? "border-rose-500 bg-rose-500 text-white"
                    : "border-gray-300 text-gray-700 hover:border-rose-300 hover:bg-rose-50"
                }
              `}
            >
              {item}
            </button>
          ),
        )}

        <button
          type="button"
          onClick={() => onPageChange(page + 1)}
          disabled={page === totalPages}
          className="
            cursor-pointer
            rounded-lg
            border
            border-gray-300
            px-4
            py-2
            text-sm
            font-medium
            text-gray-700
            transition-colors
            hover:border-rose-300
            hover:bg-rose-50
            disabled:cursor-not-allowed
            disabled:opacity-50
          "
        >
          Next
        </button>
      </div>
    </div>
  );
}
