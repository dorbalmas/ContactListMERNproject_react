import React, { useState, useEffect } from 'react';
import { doApiGet, doApiPost } from '../../services/apiService';

function EditProd(props) {

  let editId = props.match.params.editId

  let [inputData, setInputData] = useState({})

  useEffect(() => {
    let url = "http://localhost:3000/prods/single/"+editId;
    doApiGet(url)
    .then(data => {
      console.log(data);
      if(data.name){
        setInputData(data)
        
      }
    })
  }, [props.match])

  const sendForm = (event) => {
    event.preventDefault();
    let bodyData = {
      id:editId,
      name:event.target.id_name.value,
      price:event.target.id_price.value,
      image:event.target.id_image.value,
      cat:event.target.id_cat.value,
    }

    doApiPost("http://localhost:3000/prods/update",bodyData)
    .then(data => {
      if(data.nModified == 1){
        alert("prod is update")
      }
    })
  }

  return (
    <div>
      {(inputData.name) ?  (
        <form className="col-lg-6" onSubmit={sendForm}>
        <label>Product name:</label>
        <input id="id_name" type="text" className="form-control" defaultValue={inputData.name} />

        <label>Price:</label>
        <input id="id_price" type="number" className="form-control" defaultValue={inputData.price} />

        <label>Product image:</label>
        <input id="id_image" type="text" className="form-control" defaultValue={inputData.image} />

        <label>Choose cat:</label>
        <select className="form-control" id="id_cat">
           <option value={inputData.cat}>{inputData.cat}</option>
          <option value="food">Food</option>
          <option value="animals">animals</option>
          <option value="clothing">clothing</option>
          <option value="computers">computers</option>
        </select>
        <button>edit prod</button>
      </form>
      )  : ""
    }
      
    </div>
  )
}

export default EditProd