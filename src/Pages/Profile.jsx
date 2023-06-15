import React, {useState,useEffect} from "react"
import { FaTwitter } from 'react-icons/fa'
import { AiOutlineClose} from 'react-icons/ai'
import '../styles/Profile.css'
import Navbar from "../Utilities/Navbar"

const Profile=(props)=>{

const remoteServer = 'https://wiki-twitt-app.alfonso-softtech.com'
//profile state
const [profArray,setProfArray]=useState([])

//function that gets profiles
const getProfiles= async()=>{
    try {
       
       
       const response= await fetch(`${remoteServer}/profiles` ,{
           method:'GET',
           headers:{token:localStorage.token}
       })
       const profiles=await response.json()
       
       setProfArray(profiles)
       console.log(profArray)


    } 
    catch (error) {
        console.log(error)
    }
}
//render profiles
useEffect(()=>{
    getProfiles()
},[])

//function that switches from display twitt and description
const [showTweet, setShowTweet]=useState(false)
const handleShowTwitt=()=>setShowTweet(!showTweet)
//display text button either wiki-bio or twitt
const wikiBio='Wiki-Bio'
const twitt='Twitt'

//delete profile function
const deleteProfile=async(id)=>{
    try {
        console.log('this is the is',id)
        const response=await fetch(`${remoteServer}/profiles/${id}`,{
            method:'DELETE',
            headers:{token:localStorage.token}
        })
        const profileDeleted= await response.json()
        console.log(profileDeleted)
    } 
    catch (error) {
        console.log(error)
    }
}
return(

    <div className="wrapper">
        <Navbar/>
        
     {
        profArray.map(element=> (
    <div className="profile-container">

        <div className="delete-profile">
            <button 
            onClick={()=>deleteProfile(element.id)}
            className="button-delete-profile"><AiOutlineClose size="2em"color="purple" /></button>
        </div>

        <section className="card">

            <div className="card-image">
                <img 
                src={element.image} 
                alt="from wikipedia"
                className="profile-image"/>
            </div>

            <div className="card-elements">
                <div className="card-title-button">

                <h3 className="card-title">{element.name}</h3>
                <button 
                className="card-button"
                onClick={handleShowTwitt}
                >{element.name} {!showTweet ? wikiBio: twitt }</button>
            </div>
    

    {showTweet? 
            <>
    
                <p className="twitt-text">{element.twitter}</p>
                <i className="twitt-icon"><FaTwitter size="2em"/></i>
        
            </>
    
    
    :
            <> 
    
                <p className="wiki-text">{element.desc}</p>
                <div className="logo-wikipedia"></div>
            </>
    
     }

            </div>



        </section>
</div>
        
          
            
        
        )
        
        )}
    
    </div>
)



}
export default Profile