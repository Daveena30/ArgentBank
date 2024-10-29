import './nav.css'
import nav_logo from '../../img/argentBankLogo.webp'

const Nav = () => {

    return (
        <nav>
            <a href="/">
                <img
                src={nav_logo}
                alt="Argent Bank Logo"
                />
                <h1>Argent Bank</h1>
                </a>
    
                <a href="/login">
                    <i className="fa fa-user-circle"></i>
                    Sign In
                </a>
        </nav>
    )

}

export default Nav;
