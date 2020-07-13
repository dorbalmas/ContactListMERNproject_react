import React from 'react';

function Btns(props){
  let colors_ar = ["yellow","gold","pink","black","white","green"]

  return(
    <div>
      {colors_ar.map((item,i)  => {
        return(
        <button key={i} onClick={() => {props.setBg(item)}}>{item}</button>
        )
      })}
      {/* <button onClick={() => {props.setBg("red")}}>Red</button>
      <button onClick={() => {props.setBg("blue")}}>Blue</button>
      <button onClick={() => {props.setBg("silver")}}>Silver</button> */}
    </div> 
  )
}

export default Btns