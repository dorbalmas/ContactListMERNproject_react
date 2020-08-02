import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import AppDays from "./daysCalc/appDays";
import AppSuper from "./super_comps_hooks/appSuper";
// import AppDate from './date_comps/appDate';
// import AppHooks from "./hooks_comps/app_hooks";

function App() {
  return (
    <div className="App">
      {/* <AppDays /> */}
      <AppSuper />
      {/* <AppDate /> */}
      {/* <AppHooks /> */}
    </div>
  );
}

export default App;
