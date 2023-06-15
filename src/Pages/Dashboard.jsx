import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Search from "./Search"
import '../styles/Dashboard.css'
import Navbar from "../Utilities/Navbar"
import Logo from "./Logo"
import Error from "./Error"


const Dashboard=(props)=>{
  const remoteServer = 'https://wiki-twitt-app.alfonso-softtech.com'
//recibe props
const setIsAuthenticated=props.setIsAuthenticated
//user state
const[user,setUser]=useState('')
const[id,setId]=useState('')
const [status, setStatus] = useState('')
const [errorMessage, setErrorMessage] = useState('')

//function that gets user
const getUser=async()=>{
    try {
       const response= await fetch(`${remoteServer}/dashboard`,{
         method:'GET',
         headers:{token:localStorage.token}  
       })

       const jsonData= await response.json()
       console.log(jsonData)
       if(jsonData.code !== 200) {
        setErrorMessage('Server error. We are working on fixing the problem. Please try again later')
        setStatus('ERROR')
        return
       }
       if(jsonData.data.length !== 1){
         setErrorMessage('We could not retrieve your profile info. We are working on fixing this issue. Try again later.')
         setStatus('ERROR')
         return
        } 
       setUser(jsonData.data[0].user_name)
       setId(jsonData.data[0].user_id)
    }
     catch (error) {
        console.log(error)
        setErrorMessage('Server error. We are working on fixing the problem. Please try again later')
        setStatus('ERROR')
        return

    }
}
useEffect(()=>{
    getUser()
})
   if(status === 'ERROR') return(
      <Error message={errorMessage}/>
   )
    return(
      <>
       <Navbar/>
      <div className="wrapper-dashboard">

       
        <Logo/>
        <div className="header-dashboard">
             <h4 className="h1-username">Hello, {user}</h4>
        </div>
        
        <Search/>
        <div className="wrapper-buttons">
            <button className="button-dashboard">
                <Link to={'/profile'} className="link-dashboard">My profiles</Link>
              </button>
              <button 
                onClick={(e)=>{
                e.preventDefault()
                localStorage.removeItem("token")
                setIsAuthenticated(false)
                  } }
                className="button-logout"
                >logout
              </button>
        </div>
       
    </div>
      </>  
    
        

        
        
    )
}
export default Dashboard