import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router";
import { getValueByClick, define } from "../store/MovieStore";
import "../stylesheet/poster.css";
import MovieList from "./MovieList";
import MovieListComponent from "../components/MovieListComponent";

export default function MovieInfo() {
  const { movie, page, id } = useParams();
  // console.log(id);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getValueByClick(id));
  }, [id]);
  const item = useSelector((state) => state);
  const { metadata, items } = item;
  if (metadata === undefined) {
    return <div>Undefined</div>;
  }
  return (
    <div>
      <MovieListComponent movie={movie} items={items} />
      <div className="poster">
        <div className="upper">
          <img className="imgPosters" src={metadata.Poster}></img>
          <div className="rowDetail">
            <p>Title : {metadata.Title}</p>
            <p>Year : {metadata.Year}</p>
            <p>Country : {metadata.Country}</p>
            <p>Writer : {metadata.Writer}</p>
            <p>Director : {metadata.Director}</p>
            <p>Released : {metadata.Released}</p>
            <p>Runtime : {metadata.Runtime}</p>
            <p>Genre : {metadata.Genre}</p>
          </div>
        </div>
        <div className="lowerDetail">
          <p>Actors : {metadata.Actors}</p>
          <p>Awards : {metadata.Awards}</p>
          <p>Languages : {metadata.Language}</p>
          <p>Production : {metadata.Production}</p>
          <p>Rated {metadata.Rated}</p>
          <p>Rating (IMDB) : {metadata.imdbRating}</p>
        </div>
        <NavLink to={`/${movie}`}>
          <div className="close">Close</div>
        </NavLink>
      </div>
    </div>
  );
}
