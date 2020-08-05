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

  const search = (_inputSearch) => {
    productArr.map((item) => {
      if (item.type == 1) {
        return item.fedex.filter(
          (item) =>
            item.name == _inputSearch || item.description == _inputSearch
        );
      }
      if (item.type == 2) {
        item.ups.map((item) => {
          return item.filter(
            (item) =>
              item.name == _inputSearch || item.description == _inputSearch
          );
        });
      }
      if (item.type == 3) {
        return item.filter(
          (item) =>
            item.name == _inputSearch || item.description == _inputSearch
        );
      }
    });
  };
  return (
    <div>
      <Header />
      <SearchSort search={search()} />
      <ListOfProducts productArr={productArr} />
      <Footer />
    </div>
  );
}

export default AppProject;
