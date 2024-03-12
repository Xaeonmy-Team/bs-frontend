import './App.css';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import ArtistIndex from './pages/ArtistIndex';
import NotFound from './pages/NotFound';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Splash from './pages/Splash';
import ArtistProtextedIndex from './pages/ArtistProtectedIndex';
import About from './pages/About';
import Contact from  './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';





const App = () => {
  const [currentUserEmail, setCurrentUserEmail] = useState(null)
  const [currentUser, setCurrentUser] = useState(null)
  console.log(currentUserEmail)
  const SignIn = (userInfo) => {
    fetch('https://localhost:3000/login', {
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      method: "POST"
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        // store the token
        localStorage.setItem("token", response.headers.get("Authorization"))
        return response.json()
      })
      .then((payload) => {
        setCurrentUser(payload)
      })
      .catch((error) => console.log("login errors: ", error))
  }
  
  const signUp = (userInfo) => {
    console.log(userInfo)
    fetch('https://localhost:3000/signup', {
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      method: "POST"
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        // store the token
        localStorage.setItem("token", response.headers.get("Authorization"))
        return response.json()
      })
      .then((payload) => {
        setCurrentUser(payload)
      })
      .catch((error) => console.log("login errors: ", error))
  }
  
  const logout = (logout) => {
    fetch('https://localhost:3000/logout', {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token") //retrieve the token
      },
      method: "DELETE"
    })
      .then((payload) => {
        localStorage.removeItem("token") // remove the token
        setCurrentUser(null)
      })
      .catch((error) => console.log("log out errors: ", error))
    }

    const getSplashPageEmail = (email) => {
      setCurrentUserEmail(email)
      
    }
  return (
    <div className='body'>
    <Header logout = {logout}></Header>
    <Routes>
      <Route  path="/Home" element={<ArtistIndex/>} />
      <Route  path="/signin" element={<SignIn SignIn = {SignIn}/>} />
      <Route  path="/signup" element={<SignUp signUp = {signUp} currentUserEmail={currentUserEmail}/>} />
      <Route  path="/" element={<Splash getSplashPageEmail={getSplashPageEmail}/>} />
      <Route  path="/ArtistProtectedIndex" element={< ArtistProtextedIndex /> } />
      <Route  path="/*" element={<NotFound/>} />
      <Route path="/About" element={<About/>} />
      <Route path="/Contact" element={<Contact/>} />
    </Routes>
    <Footer></Footer>
    </div>
  )
  }

export default App;