import React, { useState, useEffect } from 'react';
import { doApiGet, doApiPost } from '../../services/apiService';
import{Link} from "react-router-dom"


function TableProds(props) {
  let [prods_ar, setProdsArr] = useState([]);
  // יצרנו כדי שנוכל לעדכן ולהפעיל את היוז אפקט כל פעם שמחקנו מוצר
  let [counterApi , setCounterApi] = useState(0);

  useEffect(() => {
    let url = "http://localhost:3000/prods"
    doApiGet(url)
      .then(data => {
        console.log(data);
        setProdsArr(data);
      })
  }, [counterApi])


  const delProd = async (_id) => {
    let userChoose = global.confirm("Are you sure you want to delete?");
    if (userChoose) {
      let url = "http://localhost:3000/prods/del";
      let data = await doApiPost(url, { del: _id });
      console.log(data);
      if (data.message) {
        // שמעדכנים את הקאונטר אייפ י איי הוא קורא שוב ליוז אפקט
        setCounterApi(counterApi+1)
      }
      else{
        alert("error something not work!")
      }

    }
  }

  return (
    <div className="container">
      <h2>Prods in the system:</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>Cat</th>
            <th>image</th>
            <th>Edit/Del</th>
          </tr>
        </thead>
        <tbody>
          {prods_ar.map((item, i) => {
            return (
              <tr key={item._id}  >
                <td className="align-middle">{i + 1}</td>
                <td className="align-middle">{item.name}</td>
                <td className="align-middle">{item.price}</td>
                <td className="align-middle">{item.cat}</td>
                <td className="align-middle"><img src={item.image} height="50" /></td>
                <td className="align-middle">
                  <button onClick={() => { delProd(item._id) }} className="btn btn-danger mr-2">Del</button>
                  <Link to={`/admin/edit/`+item._id} className="btn btn-warning">Edit</Link>
                  {/* http://localhost:3001/admin/edit/editId */}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default TableProds