import React from 'react';
import Header from './Header';
import Nav from './nav';
import Main from './main';
import Footer from './footer';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavAdmin from './admin/navAdmin';


function AppSuper(props) {
  return (
    <div>
      <Router>
        <Switch>
          {/* השתמשנות במקום במאפיין קומפוננטי במאפיין ברנדר כדי להציג מספר קומפנינטות
          בכתובות במערך */}
          <Route exact path={["/", "/cat/:catId", "/search/:qsearch"]} render={() => {
              return (
                <React.Fragment>
                  <Header /><Nav />
                </React.Fragment>
                )
            }
          } />
          {/* כאן הורדנו את האיקזקט כי אנחנו רוצים שכל פעם
          שבראוט יופיע תיקייה אדמין התפריט של האדמין
          יופיע */}
          <Route path={"/admin"} component={NavAdmin}  />

        </Switch>
        <Main />
        <Footer />
      </Router>
    </div>
  )
}

export default AppSuper