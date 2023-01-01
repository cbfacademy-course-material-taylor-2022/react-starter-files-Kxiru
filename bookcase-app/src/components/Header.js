import React from "react";
import { Link } from "react-router-dom";

function Header() {
  const NavStyling = { fontFamily: "Verdana", margin: 10 };

  return (
    <div>
      <h1 style={{ fontFamily: "Verdana", textAlign: "center" }}>
        My Bookcase
      </h1>

      <div style={{ textAlign: "center" }}>
        <Link to="/" style={NavStyling}>
          {" "}
          Home{" "}
        </Link>
        <Link to="/bookcase" style={NavStyling}>
          {" "}
          Bookcase{" "}
        </Link>
        <Link to="/about" style={NavStyling}>
          About Page
        </Link>
      </div>
    </div>
  );
}

export default Header;
