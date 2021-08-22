import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { send } from 'emailjs-com';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

const Contact = () => {

    const [toSend, setToSend] = useState({
        name: "",
        email: "",
        mobile: "",
        subject: "",
        message: ""
    });

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (toSend.name === "" || toSend.email === "" || toSend.subject === "" || toSend.message === "") {
            toast.error('All field is required')
        } else {
            send('service_waea5af', 'template_swn333e', toSend, 'user_rOAP0DwsCzQO1LbpI5tyY')
                .then((response) => {
                    console.log(response);
                    if (response) {
                        toast.dismiss();
                        toast.success('Message sent successfully!')
                    }
                })
                .catch((err) => {
                    if (err) {
                        toast.dismiss();
                        toast.error('Something went wrong, Please try later.');
                    }
                })
        }



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
                            active">Contact us</Link>
                    </li>

                </ul>

                <form onSubmit={handleFormSubmit}>
                    <div className="form-group">
                        <input type="text"
                            className="form-control
                        border-2" id="fullName"

                            placeholder="Your Name" name="name" value={toSend.name} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <input type="email"
                            className="form-control
                        border-2"
                            id="emailAddress"

                            placeholder="Email Id" name="email" value={toSend.email} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <input type="mobile"
                            className="form-control
                        border-2"
                            id="mobile"

                            placeholder="Mobile No." name="mobile" value={toSend.mobile} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <input type="text"
                            className="form-control
                        border-2"
                            id="subject"

                            placeholder="Yous Subject" name="subject" value={toSend.subject} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <textarea type="text"
                            rows="4"
                            className="form-control
                        border-2"
                            id="message"

                            placeholder="Message" name="message" value={toSend.message} onChange={handleChange} />
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
