import React, { useState, useEffect } from "react";
import { doApiGet } from "../services/apiService";
import SingleCountry from "./SingleCountry";
function Country(props) {
  let [countryArr, setcountryArr] = useState([]);

  useEffect(() => {
    let url = "";
    if (props.match) {
      if (props.match.params.name) {
        url =
          "https://restcountries.eu/rest/v2/name/" + props.match.params.name;
      }
      if (props.match.params.code) {
        console.log(props.match.url.split("/"));
        url =
          "https://restcountries.eu/rest/v2/alpha/" +
          props.match.url.split("/");
      }
    }
    doApiGet(url).then((data) => {
      console.log(data);
      setcountryArr(data);
      console.log(data.flag);
    });
  }, [props.match]);

  return (
    <div className="row border rounded m-4">
      {/* <SingleCountry key={countryArr.numericCode} item={countryArr[0]} />; */}
      {countryArr.map((item) => {
        return <SingleCountry key={item.name} item={item} />;
      })}
    </div>
  );
}

export default Country;
