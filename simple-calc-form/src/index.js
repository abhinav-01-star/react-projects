import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function AddForm() {
  const [sum, setSum] = useState(0);
  const [num, setNum] = useState(0);

  function handleChange(e) {
    setNum(e.target.value);
  }

  function handleSubmit(e) {
    setSum(sum + Number(num));
    e.preventDefault();
  }

  return <form onSubmit={handleSubmit}>
  <input type="number" value={num} onChange={handleChange} />
  <input type="submit" value="Add" />
  <p> Sum is {sum} </p>
  </form>;
}

const el = <AddForm />; 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  el
);