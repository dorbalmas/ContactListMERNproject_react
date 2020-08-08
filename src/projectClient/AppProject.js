import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListOfProducts from "./ListOfProducts";
import { doApiGet } from "../services/apiService";
import Footer from "./Footer";
import SearchSort from "./SearchSort";
import _ from "lodash";
function AppProject(props) {
  let [productArr, setProductArr] = useState([]);
  useEffect(() => {
    let url = "http://localhost:3000/product";
    doApiGet(url).then((data) => {
      setProductArr(data);
      console.log(data);
    });
  }, []);

  const search = (_inputSearch) => {
    let urlSearch = "http://localhost:3000/product/search/?q=" + _inputSearch;
    doApiGet(urlSearch).then((data) => {
      console.log(urlSearch);
      console.log(data);
      setProductArr(data);
    });
  };
  const sorting = (_propChange) => {
    setProductArr(_.sortBy(productArr, _propChange));
  };

  return (
    <div>
      <Header />
      <SearchSort search={search} sorting={sorting} />
      <ListOfProducts productArr={productArr} />
      <Footer />
    </div>
  );
}

export default AppProject;
