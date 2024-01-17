import React from "react";
import { Link } from "react-router-dom";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <ul className="pagination">
      {pageNumbers.map((page) => (
        <li key={page} className={page === currentPage ? "active" : ""}>
          <Link to="/" onClick={() => onPageChange(page)}>
            {page}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
