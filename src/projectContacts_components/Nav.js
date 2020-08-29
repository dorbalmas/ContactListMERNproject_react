import React, { useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import { Popup } from "semantic-ui-react";
function Nav(props) {
  let history = useHistory();
  let myInput = useRef(null);

  const search = () => {
    if (myInput.current.value)
      history.push(`/searchContact/${myInput.current.value}`);
  };
  const keyPressed = (event) => {
    if (event.key === "Enter") {
      search();
    }
  };
  return (
    <div className="row justify-content-center align-items-center fixed-top">
      <nav className="navbar navbar-light bg-dark form-control h-25">
        <div className="input-group col-lg-3 d-flex justify-content-center align-items-center">
          <input
            onKeyPress={keyPressed}
            ref={myInput}
            className="form-control border-right-0 border"
            type="search"
            placeholder="Search..."
          />
          <span className="input-group-append">
            <button
              onClick={search}
              className="btn btn-outline-info border-left-0 border"
              type="button"
            >
              <i className="fa fa-search"></i>
            </button>
          </span>
        </div>

        <div classNameName="container-fluid col-lg-4 bg-dark text-white form-control mb-3">
          <div className="container text-center">
            <Link to="/">Add Contact</Link>
            <Link to="/list">Contact List</Link>
            <Link to="/counter">Quantity</Link>
          </div>
        </div>

        {/* <!--הוספתי קצת מוזיקה לנאב בר  --> */}
        <div className="col-3 d-flex justify-content-center align-items-center text-info">
          press me
          <i className="fa fa-arrow-right px-1" aria-hidden="true"></i>
          <Popup
            content="Enjoy the music!"
            trigger={
              <div
                style={{
                  position: "relative",
                  width: "50px",
                  height: "34px",
                  overflow: "hidden",
                }}
                className="rounded"
              >
                <div
                  style={{ position: "absolute", top: "-263px", left: "-10px" }}
                >
                  <iframe
                    width="300"
                    height="300"
                    src="https://www.youtube.com/embed/5qap5aO4i9A?playlist=dTbONq0zxRA&rel=0"
                  ></iframe>
                </div>
              </div>
            }
          />
        </div>
      </nav>
    </div>
  );
}

export default Nav;
