import React,{useState,useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './Pages/Home';
import SignIn from './Pages/autentication/SignIn';
import Dashboard from './Pages/Dashboard';
import SignUp from './Pages/autentication/SignUp';
import Profile from './Pages/Profile';
import Image from './images/Image';
import NotFound from './Utilities/NotFound';
import Logo from './media/wikiTwit1.png'

function App() {

const remoteServer =  'https://wiki-twitt-app.alfonso-softtech.com'
//authentication state
const[isAutheticated,setIsAuthenticated]=useState(false)
console.log(isAutheticated)

//check if user is authenticated by
//evaluating if there is token in the localstorage
//send the token to the isveried route in the server

const isVerified= async()=>{
try {
  const response= await fetch(`${remoteServer}/users/isverified`,{
    method:'GET',
    headers:{token:localStorage.token}
  })
  //the response is a boolean
  //if there was a token sent to the authorization middleware
  //the server return true otherwise returns false
  const verified=await response.json()
  console.log('this is verified',verified)
  verified===true ? setIsAuthenticated(true) : setIsAuthenticated(false)

} catch (err) {
  console.log(err)
}
}
useEffect(()=>{
  isVerified()
})

  return (
    <>
   
    <Router>
      <Routes>
        <Route path="/" exact element={<Home/>}></Route>
        <Route path="/signin" exact element={
        <>
        {!isAutheticated ? 
          
          <SignIn setIsAuthenticated={setIsAuthenticated}/>
        
        : <Dashboard setIsAuthenticated={setIsAuthenticated}/> }
        </>

        } >

        </Route>

        <Route path="/signup" exact element={
          <>
          {!isAutheticated ?

          <SignUp setIsAuthenticated={setIsAuthenticated}/>
          :
          <SignIn setIsAuthenticated={setIsAuthenticated}/>

          }
          </>
        }>

        </Route>
        <Route path="/dashboard" exact element={
         <>
         {isAutheticated ?

          <Dashboard setIsAuthenticated={setIsAuthenticated}/>
          :
          <SignIn setIsAuthenticated={setIsAuthenticated}/>

         }
         </>

        }>

        </Route>
        <Route path="*" exact element={<NotFound/>}></Route>
        <Route path="/profile" exact element= {<Profile/>}></Route>
        <Route path="/image" exact element= {<Image/>}></Route>
      </Routes>
    </Router> 
    </>
  );
}

export default App;
