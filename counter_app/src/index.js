import React from 'react';
import ReactDOM from 'react-dom';

let counter = 0;
function show() {
  counter++;
  const el = <p>{counter}</p>;
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    el
  );
}
setInterval(show, 1000);