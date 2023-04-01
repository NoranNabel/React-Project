import { useEffect, useState } from 'react'
import axios from "axios";

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './component/Login'
import Signup from './component/Signup'
import Header from './component/Header'
import About from './component/About'
import Footer from './component/Footer'
import Home from './component/Home'
import ContactUs from './component/Contactus'
import Datenow from './component/Date'
import Profile from './component/Profile'
import ErrorPage from './ErrorPage'
import Posts from './component/Posts'
import EditPost from './component/EditPost';
// import AuthServices from "../AuthServices";


function App() {

  return (
    <>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/edit' element={<EditPost />} />
          <Route path='/*/*' element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
