import { Link } from "react-router-dom"
import '../styles/Navbar.css'
const Navbar=()=>{

    return (
        <div className='navbar-wrapper'>

        <ul className='main-navbar'>
        <Link to="/signin">Login</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/">Home</Link>

   
        </ul>
    
    </div> 
    )
}

export default Navbar