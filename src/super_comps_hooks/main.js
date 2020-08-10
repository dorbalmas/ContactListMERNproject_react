import React from "react";
import ProdList from "./prodList";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddProd from "./admin/addProd";
import TableProds from "./admin/tableProds";
import EditProd from "./admin/editProd";

function Main(props) {
  return (
    <div className="container-fluid">
      <div className="container" style={{ minHeight: "600px" }}>
        {/* TODO: במצב אדמין שלא יראו את ה הדר והנאב */}
        <Switch>
          <Route exact path="/" component={ProdList} />
          <Route exact path="/cat/:catId" component={ProdList} />
          <Route exact path="/search/:qsearch" component={ProdList} />
          <Route exact path="/admin/addProd" component={AddProd} />
          <Route exact path="/admin/table" component={TableProds} />
          <Route exact path="/admin/edit/:editId" component={EditProd} />
        </Switch>
      </div>
    </div>
  );
}

export default Main;
