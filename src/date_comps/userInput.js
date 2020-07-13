import React,{useRef} from 'react';

function UserInput(props){

  let inputDate = useRef(null)

  const changeDate = () => {
    console.log(inputDate.current.value)
    let userDate = inputDate.current.value;
    props.setUserDate2(userDate)
  }

  return(
    <div className="col-lg-6 d-flex justify-content-center">
      <input onChange={changeDate} ref={inputDate} type="date" className="w-50 form-control"/>
      <button onClick={changeDate} className="btn btn-info">Change date</button>
    </div> 
  )
}

export default UserInput