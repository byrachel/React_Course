import React, { useState } from 'react';

function Hook() {

  const [ initialState, changeState ] = useState(1);

  const increment = () => {
    changeState(initialState+1)
  }

  return (
    <div className="container">

      <p>Le state initial est de : {initialState} </p>
      <button onClick={increment}>J'aime !</button>
      
    </div>
  );
}

export default Hook;
