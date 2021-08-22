import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { resetPasswordStart } from '../redux/User/user.actions';

const mapState = ({ user }) => ({
    resetPasswordSuccess: user.resetPasswordSuccess,
    registerError: user.registerError
});

const ForgotPassword = props => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { registerError, resetPasswordSuccess } = useSelector(mapState);

    const [email, setEmail] = useState("");
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        if (Array.isArray(registerError) && registerError.length > 0) {
            setErrors(registerError);
        }
    }, [registerError]);

    useEffect(() => {
        if (resetPasswordSuccess) {
            history.push('/login');
        }
    }, [resetPasswordSuccess, history]);

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        dispatch(resetPasswordStart({ email }));

    }

    return (
        <main classNameName="no-main" style={{ backgroundColor: 'white' }}>
            <div className="col-11 col-md-10 mx-auto" style={{ width: '450px', padding: '15px' }}>
                <h3 className="text-center mt-3 mb-4">Forgot
                    your password?</h3>
                <p className="text-center text-3
                    text-muted">Enter your Email or
                    Mobile and we’ll help you reset
                    your password.</p>
                {errors.length > 0 && (
                    <>
                        {errors.map((err, index) => {
                            return (
                                <p className="text-danger" key={index}>{err}</p>
                            )
                        })}
                    </>
                )}
                <form onSubmit={handleFormSubmit}>

                    <div className="form-group">
                        <input type="text"
                            className="form-control
                            border-2"
                            id="emailAddress"
                            placeholder="Enter Email
                            or Mobile Number" name="email" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <button className="btn btn-primary
                        btn-block my-4"
                        type="submit">Continue</button>
                </form>

            </div>
        </main>
    )

}

export default ForgotPassword;