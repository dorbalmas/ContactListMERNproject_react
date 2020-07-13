import React, {useState} from 'react';
import Btns from './btns';

function AppDays(props){
  let [bg,setBg] = useState("grey")

  return(
    <div className="container text-center">
      <h1 style={{background:bg}}>Choose your favorite color:</h1>
      <Btns setBg={setBg} />
      </div> 
  )
}

export default AppDays