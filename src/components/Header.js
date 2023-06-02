import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context";

export default function Header() {
  const { search, setSearch } = useContext(Context);

  return (
    <div className="header">
      <div className="header__search">
        <lable htmlFor="search">Search</lable>
        <input
          type="text"
          id="search"
          placeholder="search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        ></input>
      </div>
      <div className="header__nav">
        <Link to=".">Home</Link>
        <Link to="post">Post</Link>
        <Link to="about">About</Link>
      </div>
    </div>
  );
}
