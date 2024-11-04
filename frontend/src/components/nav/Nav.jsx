import './nav.css'
import nav_logo from '../../img/argentBankLogo.webp'
import { Link, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/actions';

const Nav = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const user = useSelector((state) => state.auth.user);

    const signOut =  async (e) => {
        e.preventDefault();
        dispatch(logout());
        navigate("/login");
    };

    return (
        <nav>
            <Link to="/">
                <img src={nav_logo} alt="Argent Bank Logo" />
                <h1>Argent Bank</h1>
            </Link>

                {!isAuthenticated ? (
                <Link to="/login">
                <i className="fa fa-user-circle"></i>
                Sign In
            </Link>
                ) : (
                    <ul className='nav-list'>
                        <li>
                        <Link className='nav-item' to='/profile'>
                            <i className="fa fa-user-circle"></i>
                            <p>{user && user.firstName ? user.firstName : 'User'}</p>
                        </Link>
                        </li>
                        <li>
                        <a href='/' onClick={signOut}>
                            <i className="fa fa-sign-out"></i>
                            <p>Sign Out</p>
                        </a>
                        </li>
                    </ul>


                )}
                
        </nav>
    )

}

export default Nav;
