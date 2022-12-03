
import './NavBarR.css'
import User from './img/user.png'
import Logo from './img/TechquizBlack.png'

const NavBarL = () => {
    return ( 
        <nav className="navbar-R">
            <div className='logo-R'>
                <img src={Logo}/>
            </div>
                
            <div className="links-R">
                <a href="/">Home</a>
                <a href="/create">Support</a>
                <a href="/create">AboutUs</a>
                <a href="/create">Sugestões</a>
            </div>
            <div className="links1-R">
                <a href="/login">Login</a>
            </div>
            <div className="profile-R">
                <img src={User}/>
            </div>        
        </nav>
     );
}
 
export default NavBarL;