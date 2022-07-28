import React, { useDeferredValue, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { concatData } from "../store/MovieStore";
import "../stylesheet/MovieList.css";
import MovieCard from "./MovieCard";
export default function MovieListComponent({ items, movie }) {
  const [numPage, setNumPage] = useState(1);
  const dispatch = useDispatch();
  function fetchMoreData() {
    setNumPage(numPage + 1);
    dispatch(concatData(movie, numPage + 1));
  }
  return (
    <div>
      <InfiniteScroll
        dataLength={items.Search.length}
        next={fetchMoreData}
        hasMore={items.Search.length !== items.totalResults}
        loader={<h4>Loading...</h4>}
      >
        <div className="MovieList">
          {items.Search.map((item) => {
            return (
              <NavLink to={`../${movie}/${item.imdbID}`}>
                <MovieCard item={item} key={item.imdbID} />
              </NavLink>
            );
          })}
          {
            // <Pagination tpages={items.totalResults} movie={movie} />
          }
        </div>
      </InfiniteScroll>
    </div>
  );
}
