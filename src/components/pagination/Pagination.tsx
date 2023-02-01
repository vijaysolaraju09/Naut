import React, { useEffect, useState } from "react";

interface Props {
  total: number;
}

interface PageButtonProps {
  currentPage: number;
  page: number;
  totalPages: number;
  handlePage: (page: number) => void;
}

function PageButton({
  currentPage,
  page,
  totalPages,
  handlePage,
}: PageButtonProps) {
  return (
    <button
      className={`btn btn-light ${page === currentPage ? "bg-success" : ""}`}
      disabled={totalPages < 1 || page === currentPage}
      onClick={() => handlePage(currentPage)}
    >
      {currentPage}
    </button>
  );
}

export default function Pagination({ total }: Props) {
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    setTotalPages(Math.ceil(total / limit));
  }, [limit]);

  const handlePage = (pg: number) => {
    setPage(pg);
  };

  return (
    <div className="d-flex align-items-center gap-3">
      <button
        className="btn btn-light"
        disabled={page - 1 < 1}
        onClick={() => handlePage(page - 1)}
      >
        previous
      </button>
      <PageButton
        currentPage={1}
        page={page}
        totalPages={totalPages}
        handlePage={handlePage}
      />
      {totalPages > 1 && (
        <PageButton
          currentPage={2}
          page={page}
          totalPages={totalPages}
          handlePage={handlePage}
        />
      )}
      {totalPages > 2 && (
        <PageButton
          currentPage={3}
          page={page}
          totalPages={totalPages}
          handlePage={handlePage}
        />
      )}
      <button
        className="btn btn-light"
        disabled={page + 1 > total}
        onClick={() => handlePage(page + 1)}
      >
        next
      </button>
    </div>
  );
}
