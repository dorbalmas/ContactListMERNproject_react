import React from "react";
import Main from "./Main";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import { BrowserRouter as Router } from "react-router-dom";

const AppContacts = (props) => {
  return (
    <div>
      <Router>
        <Nav />
        <div style={{ height: "75px" }}></div>
        <Header />
        <Main />
        <Footer />
      </Router>
    </div>
  );
};

export default AppContacts;
