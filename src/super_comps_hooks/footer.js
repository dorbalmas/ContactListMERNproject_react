import React from 'react';

function Footer(props){
  return(
    <div className="container-fluid bg-dark text-white">  
      <div className="container text-center">
        Monkeys 2011 - {new Date().getFullYear()}
      </div>
    </div> 
  )
}

export default Footer