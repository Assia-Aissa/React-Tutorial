import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HelloWorld from './Derectory/HelloWorld';
import TextField from './Derectory/TextField';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <HelloWorld lastName="El boussanni"/>
 
  <TextField inputName='Assia' inputLabel='First Name'>
    the first text field
  </TextField>
  <TextField inputName='Assia' inputLabel='Last Name'>
     Magna elit qui velit occaecat consequat occaecat dolor est. Eiusmod aliquip mollit laboris incididunt. Eu enim veniam ad excepteur consectetur non dolor proident elit adipisicing.
    /</TextField>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
