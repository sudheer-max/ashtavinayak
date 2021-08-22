import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { registerUserStart } from '../redux/User/user.actions';

const mapState = ({ user }) => ({
    currentUser: user.currentUser,
    registerError: user.registerError
});

const Register = props => {
    const dispatch = useDispatch();
    const history = useHistory();

    const { currentUser, registerError } = useSelector(mapState);


    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [cname, setCname] = useState('');
    const [address, setAddress] = useState('');
    const [mobile, setMobile] = useState('');
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        if (Array.isArray(registerError) && registerError.length > 0) {
            setErrors(registerError);
        }
    }, [registerError]);

    useEffect(() => {
        if (currentUser) {
            formReset();
            history.push('/');
        }
    }, [currentUser, history]);

    const formReset = () => {
        setDisplayName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setCname("");
        setAddress("");
        setMobile("");
        setErrors([]);
    }



    const handleFormSubmit = (e) => {
        e.preventDefault();
        dispatch(registerUserStart({
            displayName, cname, address, mobile, email, password, confirmPassword
        }));
    }
    return (
        <main classNameName="no-main" style={{ backgroundColor: 'white' }}>
            <div className=" col-11 col-md-10 mx-auto" style={{ width: '450px', padding: '15px' }}>
                <ul className="nav nav-tabs
                    nav-justified mb-4"
                    role="tablist">
                    <li className="nav-item"> <Link
                        className="nav-link
                            text-5 line-height-3
                            active">Sign Up</Link>
                    </li>

                </ul>
                <p className="text-4 font-weight-300
                text-muted text-center mb-4">Looks
                    like you're new here!
                </p>
                {errors.length > 0 && (
                    <>
                        {errors.map((err, index) => {
                            return (
                                <p className="invalid-feedback text-danger" key={index}>{err}</p>
                            )
                        })}
                    </>
                )}
                <form onSubmit={handleFormSubmit}>
                    <div className="form-group">
                        <input type="text"
                            className="form-control
                        border-2" id="fullName"
                            placeholder="Your Name" name="displayName" value={displayName} onChange={e => setDisplayName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <input type="email"
                            className="form-control
                        border-2"
                            id="emailAddress"
                            placeholder="Email Id"
                            name="email" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <input type="password"
                            className="form-control
                        border-2"
                            id="loginPassword"
                            placeholder="Password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <input type="password"
                            className="form-control
                        border-2"
                            id="loginPassword"
                            placeholder="confirmPassword" name="confirmPassword" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
                    </div>
                    {/* <div className="form-group my-4">
                        <div className="form-check
                        text-2 custom-control
                        custom-checkbox">
                            <input id="agree"
                                name="agree"
                                className="custom-control-input"
                                type="checkbox" />
                            <label
                                className="custom-control-label"
                                for="agree">I agree
                                to the <Link to="#">Terms</Link>
                                and <Link
                                    to="#">Privacy
                                    Policy</Link>.</label>
                        </div>
                    </div> */}
                    <button className="btn btn-primary
                    btn-block my-4"
                        type="submit">Sign Up</button>

                </form>

                <p className="text-2 text-center mb-0">Already
                    have an account? <Link
                        className="btn-link" to="/login"
                    >Log In</Link></p>

            </div >
        </main>
    )
}

export default Register;