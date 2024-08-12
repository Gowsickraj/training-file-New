import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Newapps } from './NEWAPPS/Newapps';
// import { Axios } from './AXIOS/Axios';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Newapps/>
    {/* <Axios/> */}
  </React.StrictMode>
);


