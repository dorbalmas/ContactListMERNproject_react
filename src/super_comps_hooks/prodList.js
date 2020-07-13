import React,{useState, useEffect} from 'react';
import ProdItem from './prodItem';
import { doApiGet } from '../services/apiService';
import "./css/super.css"

function ProdList(props){
  let [prods_ar,setProds] = useState([])


  //component did mount
  useEffect(() => {
    let url = "http://localhost:3000/prods"
    if(props.match){
      if(props.match.params.catId){
        url = "http://localhost:3000/prods/cat/"+props.match.params.catId
      }

      if(props.match.params.qsearch){
        url = "http://localhost:3000/prods/search/?q="+props.match.params.qsearch
      }
    }
    doApiGet(url)
    .then(data => {
      setProds(data)
    })
  },[props.match])

  return(
    <div className="row">
      {prods_ar.map(item => {
        return (
          <ProdItem key={item._id} item={item}/>
        )
      })}
    </div> 
  )
}

export default ProdList