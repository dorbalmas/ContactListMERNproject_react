import React from "react";
import Tilt from "react-tilt";
function ListOfProducts(props) {
  let colors = [
    "#52BE80",
    "#27AE60",
    "#28B463",
    "#28B463",
    "#28B463",
    "#82E0AA",
  ];
  let randonColor = colors[Math.floor(Math.random() * colors.length)];
  return (
    <div className="container-fluid ">
      <div className="container">
        <div className="row">
          {props.productArr.map((item) => {
            return (
              <div
                className="col-lg-12 border rounded my-2 changeMe"
                style={{ backgroundColor: randonColor }}
              >
                <div className="row mediaQ">
                  <Tilt className="d-flex justify-content-center p-2 w-25">
                    <img
                      src={item.thumbnailUrl}
                      className="float-left p-2 
					  "
                    />
                  </Tilt>
                  <div className="col-lg-6 mediaQ">
                    <h1 className=" p-2">
                      <b>{item.name}</b>
                    </h1>
                    <p className="p-2">{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ListOfProducts;
