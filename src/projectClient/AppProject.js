import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListOfProducts from "./ListOfProducts";
import { doApiGet } from "../services/apiService";
import Footer from "./Footer";
import SearchSort from "./SearchSort";

function AppProject(props) {
  let [productArr, setProductArr] = useState([]);
  useEffect(() => {
    let url = "http://localhost:3000/product";
    doApiGet(url).then((data) => {
      console.log(data);
      setProductArr(data);
    });
  }, []);

  return (
    <div>
      <Header />
      <SearchSort />
      <ListOfProducts productArr={productArr} />
      <Footer />
    </div>
  );
}

export default AppProject;
