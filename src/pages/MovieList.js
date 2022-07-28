import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import MovieListComponent from "../components/MovieListComponent";
// impit;
import {
  concatData,
  getValueByPage,
  getValueBySearch,
} from "../store/MovieStore";

export default function MovieList() {
  const { movie } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getValueByPage(movie));
  }, [movie]);

  const itemsMovie = useSelector((state) => state);
  if (itemsMovie === undefined) {
    return <div>Search any Movie</div>;
  }
  const { items } = itemsMovie;
  if (items.Response === "False") {
    return <div>{items.Error}</div>;
  }
  return <MovieListComponent items={items} movie={movie} />;
}
