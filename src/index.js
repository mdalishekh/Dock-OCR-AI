// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import { BrowserRouter } from 'react-router-dom';
// import App from './App';

// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById('root')
// );


import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
const rootElement = document.getElementById('root');

const root = ReactDOM.createRoot(rootElement);

root.render(
  // <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  // </React.StrictMode>
);
