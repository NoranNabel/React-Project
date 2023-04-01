import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App />
  </>,
)