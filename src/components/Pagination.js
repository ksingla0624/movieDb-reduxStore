import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router";
import "../stylesheet/Pagination.css";
export default function Pagination({ tpages, movie }) {
  //   console.log(tpages);s
  const totalPage = Math.ceil(parseInt(tpages) / 10);
  //   console.log(totalPage);
  const navigate = useNavigate();
  const [itemOffset, setItemOffset] = useState(0);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * 10 + 1) % totalPage;

    setItemOffset(newOffset);
    navigate(`/${movie}/${event.selected + 1}`);
  };
  return (
    <ReactPaginate
      previousLabel={"Prev"}
      nextLabel={"Next"}
      pageCount={totalPage}
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      nextLinkClassName="nextbtn"
      previousLinkClassName="prevbtn"
      disabledClassName="disabled"
      activeClassName="active"
      containerClassName="container"
    ></ReactPaginate>
  );
}
