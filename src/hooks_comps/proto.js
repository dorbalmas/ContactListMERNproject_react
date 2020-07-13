import React,{useState} from 'react';

function Proto(props){
  let [showPara,setShowPara] = useState(false)


  const para = () => {
    return (
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
      </p>
    )
  }

  return(
    <div className="container text-center p-3">
      <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" style={{maxWidth:"200px"}} className="rounded-circle" />
      <h2>Moshe cohen</h2>
      {(showPara) ? para() : ""}
      <button onClick={() => {setShowPara(!showPara)}}>Show/hide info</button>
    </div> 
  )
}

export default Proto