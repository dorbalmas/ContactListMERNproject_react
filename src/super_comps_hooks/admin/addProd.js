import React from 'react';
import {useHistory} from "react-router-dom"

function AddProd(props){

  let history = useHistory();

  let sendForm = (event) => {
    //  מונע מהטופס לשגר את עצמו שזה הברירת מחדל
    event.preventDefault();
    // console.log("dddd")
    //event.target = הטופס עצמו ואז ניתן לדבר עם האיי די של הילדים שלו האינפוטים והסלקבוקסים
    let bodyData = {
      name:event.target.id_name.value,
      price:event.target.id_price.value,
      image:event.target.id_image.value,
      cat:event.target.id_cat.value,
    }
    console.log(bodyData)
    //http://localhost:3000/prods/add

    let url = "http://localhost:3000/prods/add";

    fetch(url, {
      method:"POST",
      body:JSON.stringify(bodyData),
      headers: { 'content-type': "application/json"
     }
    })
    .then(resp => resp.json())
    .then(data => { 
      console.log(data)
      if(data){
        console.log(data);
        alert("product added!");
        history.push("/admin/table");
      }
      else{
        alert("There is already prod in this name")
      }
    })


  }

  return(
    <div>
      <form className="col-lg-6" onSubmit={sendForm}>
        <label>Product name:</label>
        <input id="id_name" type="text" className="form-control" defaultValue="Pita" />

        <label>Price:</label>
        <input id="id_price" type="number" className="form-control" defaultValue="10" />

        <label>Product image:</label>
        <input id="id_image" type="text" className="form-control" defaultValue="https://picsum.photos/200"/>

        <label>Choose cat:</label>
        <select className="form-control" id="id_cat">
          <option value="food">Food</option>
          <option value="animals">animals</option>
          <option value="clothing">clothing</option>
          <option value="computers">computers</option>
        </select>
        <button>Add prod</button>
      </form>
    </div> 
  )
}

export default AddProd