import React from "react";
import { useRef } from "react";
function SearchSort(props) {
  let myInput = useRef(null);

  function handleAddrTypeChange(e) {
    props.sorting(e.target.value);
    console.log(e.target.value);
  }
  const search2 = () => {
    props.search(myInput.current.value);
    console.log(myInput.current.value);
  };
  const keyPressed = (event) => {
    if (event.key === "Enter") {
      props.search(myInput.current.value);
    }
  };

  console.log(myInput);
  return (
    <div className="container-fluid ">
      <div className="container">
        <div className="row justify-content-between">
          <div className="input-group mt-2 col-lg-3 float-left">
            <input
              onKeyPress={keyPressed}
              ref={myInput}
              className="form-control py-2 border-right-0 border"
              type="search"
              placeholder="search..."
            />
            <span className="input-group-append">
              <button
                onClick={search2}
                className="btn btn-outline-secondary border-left-0 border"
                type="button"
              >
                <i className="fa fa-search"></i>
              </button>
            </span>
          </div>

          <select
            onChange={handleAddrTypeChange}
            className="col-lg-3 float-right form-control mt-2 "
          >
            <option selected hidden>
              sort by:
            </option>
            <option value="id">name</option>
            <option value="price">price</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default SearchSort;
