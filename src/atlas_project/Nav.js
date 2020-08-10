import React from "react";
import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <div className="container-fluid">
      <nav className="float-left d-flex justify-content-around ">
        <Link to="/name/usa">USA</Link>
        <Link to="/name/israel">ISRAEL</Link>
        <Link to="/name/uk">UK</Link>
        <Link to="/name/france">FRANCE</Link>
        <Link to="/name/thailand">THAILAND</Link>
      </nav>
    </div>
  );
}

export default Nav;
