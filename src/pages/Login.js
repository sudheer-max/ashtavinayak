import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { emailLoginStart, googleLoginStart } from '../redux/User/user.actions';

const mapState = ({ user }) => ({
    currentUser: user.currentUser
});

const Login = props => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { currentUser } = useSelector(mapState);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if (currentUser) {
            resetForm();
            history.push('/');
        }
    }, [currentUser, history]);

    const resetForm = () => {
        setEmail("");
        setPassword("");
    }

    const handleGoogleSignIn = () => {
        dispatch(googleLoginStart());
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(emailLoginStart({ email, password }));

    }


    return (
        <main className="no-main" style={{ backgroundColor: 'white' }}>

            <div className="col-11 col-md-10
                mx-auto" style={{ width: '450px', padding: '15px' }}>
                <ul className="nav nav-tabs
                    nav-justified mb-4"
                    role="tablist">
                    <li className="nav-item"> <Link
                        className="nav-link
                            text-5 line-height-3
                            active">Login</Link>
                    </li>

                </ul>
                <p className="text-4 font-weight-300
                    text-muted text-center
                    mb-4">We are glad to see you
                    again!
                </p>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input type="email"
                            className="form-control"
                            id="emailAddress"
                            placeholder="Mobile
                            or Email" name="email" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <input type="password"
                            className="form-control"
                            id="loginPassword"
                            placeholder="Password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
                    </div>
                    <div className="row my-4">
                        <div className="col">
                            <div
                                className="form-check
                                text-2
                                custom-control
                                custom-checkbox">
                                <input
                                    id="remember-me"
                                    name="remember"
                                    className="custom-control-input"
                                    type="checkbox" />
                                <label
                                    className="custom-control-label"
                                    for="remember-me">Remember
                                    Me</label>
                            </div>
                        </div>
                        <div className="col text-2
                            text-right"><Link
                                className="btn-link"
                                to="/forgot-password">Forgot
                                Password
                                ?</Link></div>
                    </div>
                    <button className="btn
                        btn-primary btn-block
                        my-4" type="submit">Login</button>
                </form>
                <div className="d-flex
                    align-items-center my-3">
                    <hr className="flex-grow-1" />
                    <span className="mx-2 text-2
                        text-muted">Or Login
                        with Social Profile</span>
                    <hr className="flex-grow-1" />
                </div>
                <div className="d-flex flex-column
                    align-items-center mb-3">
                    <ul className="social-icons
                        social-icons-colored
                        social-icons-circle">
                        <li
                            className="social-icons-facebook"><Link
                                to="#"
                                data-toggle="tooltip"
                                data-original-title="Log
                                In with
                                Facebook"><i
                                    className="fab
                                    fa-facebook-f"></i></Link></li>

                        <li
                            className="social-icons-google" onClick={handleGoogleSignIn}><Link

                                data-toggle="tooltip"
                                data-original-title="Log
                                In with Google"><i
                                    className="fab
                                    fa-google"></i></Link>
                        </li>

                    </ul>
                </div>
                <p className="text-2 text-center
                    mb-0">New to Quickai? <Link
                        className="btn-link" to="/register"
                    >Sign
                        Up</Link></p>
            </div>
        </main>
    )
}


export default Login;
