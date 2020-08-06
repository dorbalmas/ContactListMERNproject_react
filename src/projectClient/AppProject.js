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
      setProductArr(data);
    });
  }, []);

  const search = (_inputSearch) => {
    let url = "http://localhost:3000/product";
    doApiGet(url).then((data) => {
      console.log(data);
      setProductArr(
        data.filter((item) => {
          if (item.type == 1) {
            if (
              item.fedex.name.includes(_inputSearch) ||
              item.fedex.description.includes(_inputSearch)
            ) {
              return item;
            }
          }
          if (item.type == 2) {
            for (let i = 0; i < item.ups.length; i++) {
              if (
                item.ups[i].name.includes(_inputSearch) ||
                item.ups[i].description.includes(_inputSearch)
              ) {
                return item;
              }
            }
          }
          if (item.type == 3) {
            if (
              item.name.includes(_inputSearch) ||
              item.description.includes(_inputSearch)
            )
              return item;
          }
        })
      );
    });
  };
  return (
    <div>
      <Header />
      <SearchSort search={search} />
      <ListOfProducts productArr={productArr} />
      <Footer />
    </div>
  );
}

export default AppProject;
