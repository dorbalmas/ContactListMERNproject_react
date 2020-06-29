import React, { Component } from "react";

class CoinItem extends Component {
  render() {
    let item = this.props.item;
    return (
      <div className="col-lg-6 border">
        <h2>{item.name}</h2>
        <div>Value {item.price_usd}</div>
      </div>

    )
  }
}

export default CoinItem;