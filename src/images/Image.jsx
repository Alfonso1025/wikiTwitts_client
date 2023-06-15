import React,{useState} from "react"

const Image=()=>{
    //state for image
    const[image, setImage]=useState('')
    //state for downloaded image
    
    
    //handle image onchange
    const onImageChange=(e)=>{
        setImage(e.target.files[0])
        console.log('this is the image',image)
    }

    //function that uploads image to s3 bucket
    const handleSubmit=async (e)=>{
        e.preventDefault()
        try {
            //get url from server
            const response= await fetch("http://localhost:8000/s3url")
            const parseResponse=await response.json()
            const url=await parseResponse.secureUrl
            console.log(url)

            //put request
         const postImage=   await fetch(url,{
                method:'PUT',
                headers:{'Content-Type':'multipart/form-data'},
                body:image
            })

            console.log(postImage)
            
        } 
        catch (error) {
            console.log(error)
        }   
    
    }
    const getImage=async(e)=>{
        e.preventDefault()
        const response=await fetch('http://localhost:3002/profiles/image/bill clinton')
        const src=await response.text()
        console.log(src)
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="file" 
                
                onChange={onImageChange}
                 accept="image/*"/>
                <button>upload</button>
            </form>

            <div>
                <button onClick={getImage}>Download</button>
            </div>
            <img src="//upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Bill_Clinton.jpg/220px-Bill_Clinton.jpg" alt="" />
        </div>
    )
}
export default Image