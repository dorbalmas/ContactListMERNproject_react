import React from "react";
import { Switch, Route } from "react-router-dom";
import FormPage from "./FormPage";
import ListContacts from "./ListContacts";
import CounterNum from "./CounterNum";
import EditSingleContact from "./EditSingleContact";
const Main = (props) => {
  return (
    <div className="container-fluid">
      <div className="container" style={{ minHeight: "600px" }}>
        <Switch>
          <Route exact path="/" component={FormPage} />
          <Route exact path="/list" component={ListContacts} />
          <Route exact path="/searchContact/:qS" component={ListContacts} />
          <Route exact path="/counter" component={CounterNum} />
          <Route
            exact
            path="/singleContact/:id"
            component={EditSingleContact}
          />
        </Switch>
      </div>
    </div>
  );
};

export default Main;
