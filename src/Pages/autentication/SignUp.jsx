import React, {useState} from "react"
import Navbar from "../../Utilities/Navbar"
import '../../styles/Signin.css'
const SignUp= (props)=>{
    const remoteServer = 'https://wiki-twitt-app.alfonso-softtech.com'
    //recibe props
    const setIsAuthenticated=props.setIsAuthenticated
    //input state
    const[userName,setUserName]=useState('')
    const[userEmail,setUserEmail]=useState('')
    const[userPassword,setUserPassword]=useState('')

    //submit values to db function
    const submitForm=async(e)=>{
    e.preventDefault()
    try {
        const body={userName,userEmail,userPassword}
        const response=await fetch(`${remoteServer}/users/registeruser`,{
           method:'POST',
           headers:{"Content-Type":"application/json"},
           body:JSON.stringify(body)

        })
        const newUser= await response.json()
        console.log(newUser)
        localStorage.setItem("token",newUser.data)
        setIsAuthenticated(true)
        
    } 
    catch (error) {
        console.log(error)
    }
    }

    return(
        <div className="signin-wrapper">
             <Navbar/>
            <form className="form-signin" onSubmit={submitForm}>
            <input type="text"
                placeholder="name"
                value={userName}
                onChange={(e)=>setUserName(e.target.value)}
                className="input-signin"
            />
            <input type="email"
                placeholder="email"
                value={userEmail}
                onChange={(e)=>setUserEmail(e.target.value)}
                className="input-signin"
             />
              <input type="password"
                placeholder="password"
                value={userPassword}
                onChange={(e)=>setUserPassword(e.target.value)}
                className="input-signin"
                />
             <input className="button-signin" type="submit" value="sign up"/>
            </form>
        </div>
    )
}

export default SignUp