import React from 'react';
import { Link } from 'react-router-dom';




const Footer = () => {



    return (
        <>
            <footer id="footer">
                <section className="section bg-white shadow-md pt-4 pb-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 col-md-3">
                                <div className="featured-box text-center">
                                    <div className="featured-box-icon"> <i className="fas fa-lock"></i> </div>
                                    <h4>100% Secure Payments</h4>
                                    <p>Moving your card details to a much more secured place.</p>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3">
                                <div className="featured-box text-center">
                                    <div className="featured-box-icon"> <i className="fas fa-thumbs-up"></i> </div>
                                    <h4>Trust pay</h4>
                                    <p>100% Payment Protection. Easy Return Policy.</p>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3">
                                <div className="featured-box text-center">
                                    <div className="featured-box-icon"> <i className="fas fa-bullhorn"></i> </div>
                                    <h4>Refer & Earn</h4>
                                    <p>Invite a friend to sign up and earn up to $100.</p>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3">
                                <div className="featured-box text-center">
                                    <div className="featured-box-icon"> <i className="far fa-life-ring"></i> </div>
                                    <h4>24X7 Support</h4>
                                    <p>We're here to help. Have a query and need help ? <Link to="#">Click here</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-md-4 mb-3 mb-md-0">
                            <p>Payment</p>
                            <ul className="payments-types">
                                <li><Link to="#" target="_blank"> <img data-toggle="tooltip" src="images/payment/visa.png"
                                    alt="visa" title="Visa" /></Link></li>
                                <li><Link to="#" target="_blank"> <img data-toggle="tooltip" src="images/payment/discover.png"
                                    alt="discover" title="Discover" /></Link></li>
                                <li><Link to="#" target="_blank"> <img data-toggle="tooltip" src="images/payment/paypal.png"
                                    alt="paypal" title="PayPal" /></Link></li>
                                <li><Link to="#" target="_blank"> <img data-toggle="tooltip" src="images/payment/american.png"
                                    alt="american express" title="American Express" /></Link></li>
                                <li><Link to="#" target="_blank"> <img data-toggle="tooltip" src="images/payment/mastercard.png"
                                    alt="discover" title="Discover" /></Link></li>
                            </ul>
                        </div>
                        <div className="col-md-4 mb-3 mb-md-0">
                            <p>Subscribe</p>
                            <div className="input-group newsletter">
                                <input className="form-control" placeholder="Your Email Address" name="newsletterEmail"
                                    id="newsletterEmail" type="text" />
                                <span className="input-group-append">
                                    <button className="btn btn-secondary" type="submit">Subscribe</button>
                                </span>
                            </div>
                        </div>
                        <div className="col-md-4 d-flex align-items-md-end flex-column">
                            <p>Keep in touch</p>
                            <ul className="social-icons">
                                <li className="social-icons-facebook"><Link data-toggle="tooltip" to="http://www.facebook.com/"
                                    target="_blank" title="Facebook"><i className="fab fa-facebook-f"></i></Link></li>
                                <li className="social-icons-twitter"><Link data-toggle="tooltip" to="http://www.twitter.com/"
                                    target="_blank" title="Twitter"><i className="fab fa-twitter"></i></Link></li>
                                <li className="social-icons-google"><Link data-toggle="tooltip" to="http://www.google.com/"
                                    target="_blank" title="Google"><i className="fab fa-google"></i></Link></li>
                                <li className="social-icons-linkedin"><Link data-toggle="tooltip" to="http://www.linkedin.com/"
                                    target="_blank" title="Linkedin"><i className="fab fa-linkedin-in"></i></Link></li>
                                <li className="social-icons-youtube"><Link data-toggle="tooltip" to="http://www.youtube.com/"
                                    target="_blank" title="Youtube"><i className="fab fa-youtube"></i></Link></li>
                                <li className="social-icons-instagram"><Link data-toggle="tooltip" to="http://www.instagram.com/"
                                    target="_blank" title="Instagram"><i className="fab fa-instagram"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="footer-copyright">
                        <ul className="nav justify-content-center">
                            <li className="nav-item"> <Link className="nav-link active" to="#">About Us</Link> </li>
                            <li className="nav-item"> <Link className="nav-link" to="#">Faq</Link> </li>
                            <li className="nav-item"> <Link className="nav-link" to="#">Contact</Link> </li>
                            <li className="nav-item"> <Link className="nav-link" to="#">Support</Link> </li>
                            <li className="nav-item"> <Link className="nav-link" to="#">Terms of Use</Link> </li>
                            <li className="nav-item"> <Link className="nav-link" to="#">Privacy Policy</Link> </li>
                        </ul>
                        <p className="copyright-text">Copyright © {new Date().getFullYear()} <Link to="#">Ashtavinayak</Link>. All Rights Reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
