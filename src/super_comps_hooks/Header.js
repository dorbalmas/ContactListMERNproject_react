import React,{useRef} from 'react';
import {useHistory} from 'react-router-dom';

function Header(props){
  let searchInput = useRef(null);
  // משמש כדי לעבור ליו אר אל באופן ידני ללא לינק
  let history = useHistory();
  
  const doSearch = () => {
    let searchQuery = searchInput.current.value;
    // משגר לכתובת שנמצא בסוגריים של הפוש
    history.push("/search/"+searchQuery);
  }

  return(
    <div className="container-fluid bg-secondary text-white">  
      <div className="container d-flex justify-content-between">
        <div className="logo col-lg-4 p-2">
          <h2>Hooks market</h2>
        </div>
        <div className="search d-flex col-lg-4 d-flex p-2 align-items-center">
          <input ref={searchInput} type="text" className="form-control" />
          <button onClick={doSearch} className="btn btn-light">Search</button>
        </div>
      </div>
    </div> 
  )
}

export default Header