import React from 'react';
import {Link} from "react-router-dom"

function Nav(props){
  return(
    <nav className="container-fluid bg-dark text-white">  
      <div className="container text-center">
        <Link to="/">Home</Link>
        <Link to="/cat/food">Food</Link>
        <Link to="/cat/animals">Animals</Link>
        <Link to='/cat/clothing'>Clothing</Link>
        <Link to='/admin/addProd'>AddProd</Link>
      </div>
    </nav> 
  )
}

export default Nav