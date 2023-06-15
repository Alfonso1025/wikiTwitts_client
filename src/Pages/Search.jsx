import React,{useState} from "react"
import '../styles/Search.css'

const Search=()=>{

    const remoteServer = 'https://wiki-twitt-app.alfonso-softtech.com'
    //state for the person to search
    const[nameToSearch,setNameToSearch]=useState('')
    console.log(nameToSearch)
    //function that takes input name and sent it to server

    const search=async(e)=>{
    e.preventDefault()
    try {
        const response=  await fetch(`${remoteServer}/profiles/${nameToSearch}`,
        {
            method:'POST',
            headers:{
                token:localStorage.token,
                "Content-Type":"application/json"
            } 
        })
        const profile= await response.json()
        if(profile.insertId) window.location.href='/'
        else console.log('no id')
         
        console.log(  profile)
        
        
    } 
    catch (error) {
        console.log(error)
    }

    }
    return(
        <div className="wrapper-search">
            <form onSubmit={search} className="form-container" >
            <input
             type="text"
             placeholder="name"
             onChange={(e)=>setNameToSearch(e.target.value)}
             value={nameToSearch}
              className="input-search"
              />
              <button className="button-search">Search</button>
            </form>
            
        </div>
    )
}

export default Search