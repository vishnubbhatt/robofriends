import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './components/Card'
import reportWebVitals from './reportWebVitals';
import 'tachyons'
import {robots} from './robots'

ReactDOM.render(
  <React.StrictMode>
    <div>
      <Card id={robots[0].id}/>
      <Card id={robots[1].id}/>
      <Card id={robots[2].id}/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
