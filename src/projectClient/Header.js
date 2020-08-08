import React from "react";
import "../css_comps/style.css";

function Header(props) {
  return (
    <header
      data-tilt
      className="d-flex justify-content-center align-items-center header"
    >
      <h1 className="display-2 text-center">PRODUCT LIST</h1>
    </header>
  );
}

export default Header;
