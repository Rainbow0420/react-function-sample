import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Example from './Components/example';
import Form from './Components/form';

const root = ReactDOM.createRoot(document.getElementById('root'));
function Parentheses() {
  return (<h1>
              We can call function using name of the 
              function followed by Parentheses 
          </h1>);
}
root.render(
  <React.StrictMode>
    <App />
    {/* <Parentheses /> */}
    <Example name = "click"/>
    <Form></Form>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
