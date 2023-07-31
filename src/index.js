import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function emitComment(name) {
    setInterval(() => {
        window.dispatchEvent(
            new CustomEvent(`body-${name}`, {
                detail: `Body của ${name}`
            })
        )
    }, 2000)
}

emitComment('DKC')
emitComment('NTH')
emitComment('NHCM')


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
