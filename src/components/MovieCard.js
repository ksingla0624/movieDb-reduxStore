import React from "react";
import { NavLink } from "react-router-dom";
import "../stylesheet/MovieCArd.css";
export default function MovieCard({ item }) {
  // console.log(movie);
  return (
    // <NavLink to={`.`}>
    <div className="movie_card">
      <img src={item.Poster} alt={item.Title} className="imgPoster" />
      <div className="info">
        <p>{item.Title}</p>
        <p>Year : {item.Year}</p>
      </div>
    </div>
    // </NavLink>
  );
}
