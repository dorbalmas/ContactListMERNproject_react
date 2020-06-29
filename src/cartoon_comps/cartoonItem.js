import React, { Component } from "react";

class CartoonItem extends Component {
  render() {
    let { episodes, title, image_url } = this.props.item;
    return (
      <div className="col-lg-6 p-2">
        <div className="border p-2 overflow-hidden">
          <img src={image_url} className="float-left w-25 mr-2 "></img>
          <h2>{title}</h2>
          <div>episodes: {episodes}</div>
        </div>
      </div>

    )
  }
}

export default CartoonItem;


//episodes ,title, image_url