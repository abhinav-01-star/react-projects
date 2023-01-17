import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Counter() {
  const [counter, setCounter] = useState(0);

  const increment = ()=> {
    setCounter(counter+1);
  }
  return <div>
  <p>{counter}</p>
  <button onClick={increment}>Increment</button>
  </div>;
}

const el = <Counter />; 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  el
);