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
            if (item.type == 1)
              return (
                <div
                  className="col-lg-12 border rounded my-2 changeMe"
                  style={{ backgroundColor: randonColor }}
                >
                  <div className="row mediaQ">
                    <img
                      src={item.fedex.thumbnailUrl}
                      className="float-left p-2 
					  "
                    />
                    <div className="col-lg-6 mediaQ">
                      <h1 className=" p-2">
                        <b>{item.fedex.name}</b>
                      </h1>
                      <p className="p-2">{item.fedex.description}</p>
                    </div>
                  </div>
                </div>
              );
            if (item.type == 2)
              item.ups.map((upsItem) => {
                return (
                  <div
                    className="col-lg-12 border rounded my-2 changeMe"
                    style={{ backgroundColor: randonColor }}
                  >
                    <div className="row mediaQ">
                      <img
                        src={upsItem.thumbnailUrl}
                        className="float-left p-2 
					  "
                      />
                      <div className="col-lg-6 mediaQ">
                        <h1 className=" p-2">
                          <b>{upsItem.name}</b>
                        </h1>
                        <p className="p-2">{upsItem.description}</p>
                      </div>
                    </div>
                  </div>
                );
              });

            if (item.type == 3)
              return (
                <div
                  className="col-lg-12 border rounded my-2 changeMe"
                  style={{ backgroundColor: randonColor }}
                >
                  <div className="row mediaQ">
                    <img
                      src={item.thumbnailUrl}
                      className="float-left p-2 
					  "
                    />
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
