// import logo from './logo.svg';
import React, {useEffect, useState, createContext} from 'react';
import './App.css';

function App() {
  const [state, setState] = useState([]);
  const input = document.querySelector('#main-input');
  input.addEventListener(`keydown`, cb);
  // useEffect(() => {
  //   input.value = '';
  // },[state])
  function cb(evt) {
    if ((evt.metaKey || evt.ctrlKey) && evt.key === `Enter`) {
      input.removeEventListener(`keydown`, cb);
      console.log(state);
      const value = input.value;
      setState([value, ...state]);
      // input.value = '';
    }
  }


  return (
    <div></div>

  );
}

export default App;
