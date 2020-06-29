import React,{Component} from "react";
import { doApiGet } from "../services/apiService";
import CartoonItem from "./cartoonItem";
import Search from "./search";

class AppCartoon extends Component{
  state = {cartoons_ar:[]}

  componentDidMount(){
    let url = "https://api.jikan.moe/v3/search/anime?q=dragon&limit=16";
    doApiGet(url)
    .then(data => {
      this.setState({cartoons_ar:data.results})
     // console.log(data.results);
    })

  }

  searchCartoons = (_val) => {
    let url = `https://api.jikan.moe/v3/search/anime?q=${_val}&limit=16`;
    doApiGet(url)
    .then(data => {
      this.setState({cartoons_ar:data.results})
     // console.log(data.results);
    })
  }

  searcResult = () => {
    return (
      <div className="row">
      {this.state.cartoons_ar.map(item => {
        return(
          <CartoonItem key={item.mal_id} item={item}/>
        )
      })}
    </div>
    )
  }


  render(){
    return(
      <div className="container">
        <h2>Cartoon search</h2>
        <Search searchCartoons={this.searchCartoons} />
        {(this.state.cartoons_ar.length > 0) ? this.searcResult() : "There is 0 results"}
       
        
      </div>
    
    )
  }
}

export default AppCartoon;




// https://api.jikan.moe/v3/search/anime?q=dragon&limit=16