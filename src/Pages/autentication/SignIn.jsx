import React,{useState} from "react"
import '../../styles/Signin.css'
import Navbar from "../../Utilities/Navbar"


const SignIn=(props)=>{

const remoteServer = 'https://wiki-twitt-app.alfonso-softtech.com'
//recibe props
const setIsAuthticated=props.setIsAuthenticated
//inputs state
const[userEmail,setUserEmail]=useState('')
const[userPassword,setUserPassword]=useState('')

//submit inputs to the login route in server
const submitLoginForm=async(e)=>{
e.preventDefault(e)
try {
    const body={userEmail,userPassword}
    const response=await fetch(`${remoteServer}/users/signin`,{
    method:'POST',
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(body)
    })

    const parseResponse=await response.json()
    console.log(parseResponse)
    if(parseResponse.code === 200){
        console.log('user authenticated setting token to local storage')
        localStorage.setItem("token", parseResponse.data)
        setIsAuthticated(true)
    }
   
    
} 
catch (error) {
    console.log(error)
}

}
    return(
        <div className="signin-wrapper">

            <Navbar/>

            <form className="form-signin" onSubmit={submitLoginForm}>
                <input type="email"
                  placeholder="email"
                  value={userEmail}
                  onChange={e=>setUserEmail(e.target.value)}
                  className="input-signin"/>
                  
                <input 
                type="password" 
                 placeholder="password"
                 value={userPassword}
                 onChange={e=>setUserPassword(e.target.value)}
                 className="input-signin"/>
                <button className="button-signin">Sign in</button>
            </form>
        </div>
        
    )
}

export default SignIn