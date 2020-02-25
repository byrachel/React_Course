import React, { useState, Fragment, useEffect } from 'react';
import axios from 'axios';

function Hook() {

// useState

  const [ initialState, changeState ] = useState(1);
  const [ tableauVide, remplirTab ] = useState([0]);

  const increment = () => {
    changeState(initialState+1)
  }

  const tableau = () => {
    for(var i = 0; i > 0; i++) {
      remplirTab(tableauVide.push(initialState));
    }
    console.log(tableauVide);
  }

// userEffect (similaire à componentDidMount et componentDidUpdate)

  const [ data, setData ] = useState([]);

  useEffect(() => {
      const fetchData = async() => {
          const result = await axios(
              'https://jsonplaceholder.typicode.com/posts',
          );
          setData(result.data);
      }
      fetchData();
    }, []
  )


  return (
    <div className="container">

    <h2>UseState</h2>
        <p>Le state initial est de : {initialState} </p>
        <button onClick={increment}>J'aime !</button>
        <button onClick={tableau}>Enregistrer dans la console</button>
    <p>_</p>
    <h2>UseEffect</h2>
        <Fragment>
            <ul>
                {data.map(item => (
                    <li key={item.id}><p>{item.title}</p></li>
                ))}
            </ul>
        </Fragment>
    </div>
  );
}

export default Hook;
