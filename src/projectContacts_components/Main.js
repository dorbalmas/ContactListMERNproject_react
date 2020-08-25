import React from "react";
import Header from "./Header";
import FormPage from "./FormPage";
const Main = (props) => {
  return (
    <div className="container-fluid ">
      <div className="container">
        <Header />
        <FormPage />
      </div>
    </div>
  );
};

export default Main;
