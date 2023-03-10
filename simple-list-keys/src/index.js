import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function MyList(props) {
  const arr = props.data;
  const listItems = arr.map((val, index) =>
    <li key={index}>{val}</li>
  );
  return <ul>{listItems}</ul>;
}

const arr = ["A", "B", "C"];
const el = <MyList data={arr} />; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  el
);