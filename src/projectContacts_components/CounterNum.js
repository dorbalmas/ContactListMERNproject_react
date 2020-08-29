import React, { useEffect, useState } from "react";
import { doApiGet } from "../services/apiService";

const CounterNum = (props) => {
  let [count_of_contacts, setCount_of_contacts] = useState(0);
  useEffect(() => {
    let url = "https://ideodigitalcontactproject.herokuapp.com/contacts";
    doApiGet(url).then((data) => {
      setCount_of_contacts(data.length);
    });
  }, []);
  return (
    <div className="d-flex align-items-center justify-content-center mt-5">
      <div className="display-1 text-warning">{count_of_contacts}</div>
    </div>
  );
};

export default CounterNum;
