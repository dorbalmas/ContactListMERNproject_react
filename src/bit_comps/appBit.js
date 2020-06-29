import React,{Component} from "react";
import { doApiGet } from "../services/apiService";
import CoinItem from "./coinItem";

class AppBit extends Component{
  state = {coins_ar:[]}


  componentDidMount(){
    let url = "http://fs1.co.il/bus/bitcoin.php"
    doApiGet(url)
    .then(data => {
      console.log(data)
      this.setState({coins_ar:data})
    })
    // נעשה בקשה לשירות API
  }
  
  render(){
    return(
      <div className="container">
        <h2>Coins list:</h2>
        <div className="row">
          {this.state.coins_ar.map(item => {
            return(
              <CoinItem key={item.id} item={item}/>
            )
          })}
        </div>
      </div>
    
    )
  }
}

export default AppBit;