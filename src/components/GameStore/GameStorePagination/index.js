import React from "react";
import PropTypes from 'prop-types';
export default function GameStorePagination({ page, handlePagination }) {

  const handleChangePage = (e) => {
    e.preventDefault();
    handlePagination(e);
  };

  return (
    <div className="row">
      <div className="game-store-game-list-pagination mt-5 ml-auto mr-auto">
        <nav aria-label="...">
          <ul className="pagination">
            <li className={"page-item" + (page === 1 ? " disabled" : "")}>
              <a
                id="previous"
                onClick={handleChangePage}
                className="page-link"
                href="#"
                tabIndex="-1"
              >
                Previous
              </a>
            </li>
            <li className="page-item active">
              <a
                onClick={handleChangePage}
                id={page}
                className="page-link"
                href="#"
              >
                {page}
              </a>
            </li>
            <li className={"page-item"}>
              <a
                onClick={handleChangePage}
                id={page + 1}
                className="page-link"
                href="#"
              >
                {page + 1}
              </a>
            </li>
            <li className="page-item">
              <a
                onClick={handleChangePage}
                id={page + 2}
                className="page-link"
                href="#"
              >
                {page + 2}
              </a>
            </li>
            <li className="page-item">
              <a
                id="next"
                onClick={handleChangePage}
                className="page-link"
                href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

GameStorePagination.propTypes = {
    handlePagination: PropTypes.func,
    page: PropTypes.number
  };