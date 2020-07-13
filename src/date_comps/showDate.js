import React,{useState,useEffect} from 'react';

function ShowDate(props){
  let [days,setDays] = useState(99)
  
  let calcDays = (_newDate) => {
    let timeUnix = Date.parse(_newDate) - Date.parse(new Date());
    let timeDays = timeUnix / (1000 * 60 * 60 * 24);
    setDays(Math.floor(timeDays));
  }

  useEffect(() => {
    calcDays(props.userDate)
  },[props.userDate])


  return(
    <div className="col-lg-6 border">
      <h2>Date deadline: {props.userDate}</h2>
      <h4>Days left: {days}</h4>
    </div> 
  )
}

export default ShowDate