import React,{useState} from 'react';
import ShowDate from './showDate';
import UserInput from './userInput';

function AppDate(props){
  let [userDate,setUserDate] = useState("2021-01-01");

  return(
    <div className="container">
      <div className="d-flex justify-content-center text-center">
      <ShowDate userDate={userDate}/>
      </div>
      <div className="d-flex justify-content-center text-center my-2">
      <UserInput setUserDate2={setUserDate} />
      </div>
    </div> 
  )
}

export default AppDate