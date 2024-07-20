import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HelloWorld from './Derectory/HelloWorld';
import Form from './CounterState/Form';
import Events from './CounterState/Events';
import Counter from './CounterState/Counter';
import Formulaire from './CounterState/Formulaire';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  // <Form init={2} step={10}/>
   
<Formulaire/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
