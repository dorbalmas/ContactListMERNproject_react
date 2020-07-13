import React from 'react';

function ProdItem(props) {

  let item = props.item;
  return (
    <div className="p-2 col-lg-3 col-6">
      <div className="card" >
        {/* <img className="card-img-top" src={item.image} alt="Card image cap" height="200" /> */}
        <div className="pic" style={{ backgroundImage: `url(${item.image})` }}></div>
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <div className="card-text">Price: {item.price} NIS</div>
          <div className="card-text">Category: {item.cat}</div>
          <button className="btn btn-primary mt-3">Add to cart</button>
        </div>
      </div>
    </div>
  )

}

export default ProdItem