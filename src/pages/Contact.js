import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <main classNameName="no-main" style={{ backgroundColor: 'white' }}>
            <div className=" col-11 col-md-10 mx-auto" style={{ width: '450px', padding: '15px' }}>
                <ul className="nav nav-tabs
                    nav-justified mb-4"
                    role="tablist">
                    <li className="nav-item"> <Link
                        className="nav-link
                            text-5 line-height-3
                            active">Contact us</Link>
                    </li>

                </ul>

                <form id="signupForm" method="post">
                    <div className="form-group">
                        <input type="text"
                            className="form-control
                        border-2" id="fullName"
                            required
                            placeholder="Your Name" />
                    </div>
                    <div className="form-group">
                        <input type="email"
                            className="form-control
                        border-2"
                            id="emailAddress"
                            required
                            placeholder="Email Id" />
                    </div>
                    <div className="form-group">
                        <input type="text"
                            className="form-control
                        border-2"
                            id="subject"
                            required
                            placeholder="Yous Subject" />
                    </div>
                    <div className="form-group">
                        <textarea type="text"
                            rows="4"
                            className="form-control
                        border-2"
                            id="message"
                            required
                            placeholder="Message" />
                    </div>


                    <button className="btn btn-primary
                    btn-block my-4"
                        type="submit">Send Message</button>
                </form>



            </div >
        </main>
    )
}

export default Contact;
