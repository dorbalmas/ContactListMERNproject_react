import React, {useState} from 'react';

function Counter(props){
  let [counter,setCounter] = useState(4);

  const add1 = () => {
    setCounter(counter+1)
  }
 
  return(
    <div className="container">
      <h2>Counter: {counter}</h2>
      <button onClick={add1}>Add 1</button>
      <button onClick={() => {setCounter(counter+1)}}>Add 1 B</button>
    </div> 
  )
}

export default Counter



