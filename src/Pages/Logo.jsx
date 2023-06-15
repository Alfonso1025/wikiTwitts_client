import Navbar from "../Utilities/Navbar"
import '../styles/Logo.css'
import logo from '../media/wikiTwit1.png'

const Logo=()=>{
    return (
        <div className="logo-wrapper">
            <img src={logo} alt="wikitwitts logs" />    
        </div>
    )
}

export default Logo