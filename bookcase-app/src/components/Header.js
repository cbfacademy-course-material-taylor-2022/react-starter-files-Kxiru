import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <h1>My Bookcase</h1>
      <Link to="/"> Home </Link>
      <Link to="/bookcase"> Bookcase </Link>
      <Link to="/about">About Page</Link>
    </div>
  );
}

export default Header;
