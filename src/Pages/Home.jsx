import Navbar from "../Utilities/Navbar"
import '../styles/Home.css'
import Logo from "./Logo"

const Home=()=>{
    return (
        <div className="home-wrapper">
            <Navbar/>
            <Logo/>
            <h1 className="home-header">Welcolme</h1>

            <div className="home-body">
          
            <p> WikiProfiles, an application that enables you to explore your 
                favourite personalities across sports, technology, politics, and beyond. 
                Utilizing web scraping, WikiProfiles retrieves captivating images of the public
                 figures you search for. Additionally, it seamlessly connects with the 
                 Wikipedia API to provide comprehensive biographical information. Furthermore, 
                 with the integration of the Twitter API, you can conveniently access the 
                 latest tweet from each person. By gathering and storing all this valuable data 
                 in a database, WikiProfiles ensures a seamless user experience. Access your 
                 curated profiles effortlessly through the intuitive dashboard, where each profile is beautifully presented in an aesthetically designed card.
            </p>
            </div>
            
        </div>
    )
}

export default Home