import React from "react";
import { useRef } from "react";
function SearchSort(props) {
  let myInput = useRef(null);

  return (
    <div className="container-fluid ">
      <div className="container">
        <div className="row justify-content-between">
          <div className="input-group mt-2 col-lg-3 float-left">
            <input
              ref={myInput}
              className="form-control py-2 border-right-0 border"
              type="search"
              placeholder="search..."
              id="example-search-input"
            ></input>
            <span className="input-group-append">
              <button
                onClick={() => props.search(myInput)}
                className="btn btn-outline-secondary border-left-0 border"
                type="button"
              >
                <i className="fa fa-search"></i>
              </button>
            </span>
          </div>

          <select className="col-lg-3 float-right form-control mt-2">
            <option selected hidden>
              sort by:
            </option>
            <option value="name">name</option>
            <option value="price">price</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default SearchSort;
