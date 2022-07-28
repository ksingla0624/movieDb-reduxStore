import React from "react";
import { useDispatch } from "react-redux";

import { NavLink, useNavigate } from "react-router-dom";
import { getValueByPage } from "../store/MovieStore";
import "../stylesheet/NavBar.css";

export default function NavBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="navBar">
      <div className="name">
        <NavLink to="/" className="icon title">
          MOVIE DB
        </NavLink>
      </div>
      <div className="icons">
        <NavLink to="/" className="icon home">
          Home
        </NavLink>
        <NavLink to="/about" className="icon about">
          About
        </NavLink>
        <input
          type="text"
          className="icon search"
          placeholder="Search"
          onKeyDown={(e) => {
            if (e.code === "Enter") {
              navigate(`/${e.target.value}`);
            }
          }}
        />
      </div>
    </div>
  );
}
