import React from "react";
import { Link } from "react-router-dom";
const Header = (props) => {
  return (
    <Link to="/list">
      <div className="container-fluid">
        <div className="container">
          <header className="d-flex justify-content-center align-items-center header">
            <h1 className="display-3 text-center">CONTACT LIST</h1>
          </header>
        </div>
      </div>
    </Link>
  );
};

export default Header;
