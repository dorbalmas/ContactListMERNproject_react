import React from 'react';
import Counter from './counter';
import Proto from './proto';
import LifeC from './lifeC';

function AppHooks(props){
  return(
    <div> 
      <LifeC />
      <hr />
      <Proto />
      <hr />
      <Counter />
    </div> 
  )
}

export default AppHooks