import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutStart } from '../redux/User/user.actions';


const mapState = ({ user }) => ({
    currentUser: user.currentUser
});

const Header = (props) => {
    const dispatch = useDispatch();
    // console.log(props);

    const signOut = () => {
        dispatch(logoutStart())
    }
    const { currentUser } = useSelector(mapState);
    return (
        <div id="main-wrapper">

            <header id="header">
                <div className="container">
                    <div className="header-row">
                        <div className="header-column justify-content-start">

                            <div className="logo"> <Link to="/" className="d-flex" title="Ashtavinayak Temple"><img
                                src={process.env.PUBLIC_URL + '/logo.png'} style={{ width: '200px' }} alt="Quickai" /></Link> </div>

                        </div>
                        <div className="header-column justify-content-end">
                            <nav className="primary-menu navbar navbar-expand-lg">
                                <div id="header-nav" className="collapse navbar-collapse">
                                    <ul className="navbar-nav">
                                        <li className="dropdown"> <Link className="dropdown-toggle" to="/">Home</Link>

                                        </li>

                                        <li className="dropdown dropdown-mega active"> <Link className="dropdown-toggle"
                                            to="/booking">Booking</Link>

                                        </li>
                                        <li className="dropdown"> <Link className="dropdown-toggle" to="/">Features</Link>

                                        </li>

                                        <li className="dropdown"> <Link className="dropdown-toggle" to="/contact">Contact</Link>

                                        </li>

                                        {!currentUser && (
                                            <>
                                                <li className="dropdown"> <Link className="dropdown-toggle" to="/register">Sign Up</Link></li>
                                                <li className="dropdown"> <Link className="dropdown-toggle" to="/login">Login</Link></li>
                                            </>
                                        )}
                                        {currentUser && (
                                            <>
                                                <li className="dropdown"> <Link className="dropdown-toggle">{currentUser.displayName}</Link></li>
                                                <li className="dropdown"> <Link className="dropdown-toggle" onClick={signOut}>Logout</Link></li>
                                            </>
                                        )}
                                    </ul>

                                </div>
                            </nav>

                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#header-nav">
                                <span></span> <span></span> <span></span> </button>



                        </div>
                    </div>
                </div>
            </header>




        </div>
    )
}

Header.defaultProps = {
    currentUser: null
}





export default Header;
