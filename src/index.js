import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import DrawerAppBar from './Components/navbar';
import Sidbar from './Components/sidebarnav';
// import Tophadding from './Components/tophadding';
import {
 Grid,

} from "@mui/material";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>

  <DrawerAppBar/>
  
 
    
    <App />
   
   
 
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
