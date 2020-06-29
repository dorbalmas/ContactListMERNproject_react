import React from 'react';

import './App.css';
import AppBit from './bit_comps/appBit';
import AppCartoon from './cartoon_comps/appCartoon';

function App() {
  return (
    <div className="App">
      <AppCartoon />
      <hr />
      <AppBit />
    </div>
  );
}

export default App;
