import React from 'react';
import {Link} from "react-router-dom"

function NavAdmin(props) {
  return (
    <nav className="container-fluid bg-info text-white">
      <div className="container text-center">
        <Link to="/">Home</Link>
        <Link to='/admin/addProd'>AddProd</Link>
        <Link to='/admin/table'>table</Link>
      </div>
    </nav>
  )
}

export default NavAdmin