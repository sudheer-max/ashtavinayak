import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <div className="bg-secondary">
                <div className="container">
                    <ul className="nav secondary-nav">
                        {/* <li className="nav-item"> <Link className="nav-link" to="booking-hotels.html"><span><i
                            className="fas fa-bed"></i></span> Hotels</Link></li> */}
                        <li className="nav-item"> <Link className="nav-link active" to="booking-bus.html"><span><i
                            className="fas fa-bus"></i></span> Bus</Link> </li>
                        {/* <li className="nav-item"> <Link className="nav-link" to="booking-cars.html"><span><i
                            className="fas fa-car"></i></span> Cars</Link> </li> */}
                    </ul>
                </div>
            </div>
            <div id="content">
                <section className="container">
                    <div className="bg-white shadow-md rounded p-4">
                        <div className="row">
                            <div className="col-lg-5 mb-4 mb-lg-0">
                                <h2 className="text-4 mb-3">Book Bus Tickets</h2>
                                <form id="bookingBus" method="post">
                                    <div className="form-row">
                                        <div className="col-lg-6 form-group">
                                            <input type="text" className="form-control" id="busFrom" required placeholder="From" />
                                            <span className="icon-inside"><i className="fas fa-map-marker-alt"></i></span>
                                        </div>
                                        <div className="col-lg-6 form-group">
                                            <input type="text" className="form-control" id="busTo" required placeholder="To" />
                                            <span className="icon-inside"><i className="fas fa-map-marker-alt"></i></span>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="col form-group">
                                            <input id="busDepart" type="text" className="form-control" required
                                                placeholder="Depart Date" />
                                            <span className="icon-inside"><i className="far fa-calendar-alt"></i></span>
                                        </div>
                                    </div>
                                    <div className="travellers-class form-group">
                                        <input type="text" id="busTravellersClass" className="travellers-class-input form-control"
                                            name="bus-travellers-class" placeholder="Seats" readonly required
                                            onkeypress="return false;" />
                                        <span className="icon-inside"><i className="fas fa-caret-down"></i></span>
                                        <div className="travellers-dropdown">
                                            <div className="row align-items-center mb-3">
                                                <div className="col-sm-7">
                                                    <p className="mb-sm-0">Seats</p>
                                                </div>
                                                <div className="col-sm-5">
                                                    <div className="qty input-group">
                                                        <div className="input-group-prepend">
                                                            <button type="button" className="btn bg-light-4" data-value="decrease"
                                                                data-target="#adult-travellers" data-toggle="spinner">-</button>
                                                        </div>
                                                        <input type="text" data-ride="spinner" id="adult-travellers"
                                                            className="qty-spinner form-control" value="1" readonly />
                                                        <div className="input-group-append">
                                                            <button type="button" className="btn bg-light-4" data-value="increase"
                                                                data-target="#adult-travellers" data-toggle="spinner">+</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <button className="btn btn-primary btn-block submit-done" type="button">Done</button>
                                        </div>
                                    </div>
                                    <button className="btn btn-primary btn-block" type="submit">Search Bus</button>
                                </form>
                            </div>

                            <div className="col-lg-7">
                                <div className="owl-carousel owl-theme single-slider" data-animateout="fadeOut"
                                    data-animatein="fadeIn" data-autoplay="true" data-loop="true" data-autoheight="true"
                                    data-nav="true" data-items="1">
                                    <div className="item"><Link to="#"><img className="img-fluid"
                                        src="./images/slider/booking-banner-2.jpg" alt="banner 2" /></Link></div>
                                    <div className="item"><Link to="#"><img className="img-fluid"
                                        src="./images/slider/booking-banner-3.jpg" alt="banner 3" /></Link></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                <div className="container">
                    <section className="section pb-4">
                        <h2 className="text-9 font-weight-600 text-center">Why Book Bus with Ashtavinayak</h2>
                        <p className="lead mb-5 text-center">Book Bus Tickets Online. Save Time and Money!</p>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="featured-box style-1 mb-4">
                                    <div className="featured-box-icon text-primary"> <i className="fas fa-dollar-sign"></i> </div>
                                    <h3>No Booking Charges</h3>
                                    <p>No hidden charges, no payment fees, and free customer service. So you get the best deal
                                        every time!</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="featured-box style-1 mb-4">
                                    <div className="featured-box-icon text-primary"> <i className="fas fa-search"></i> </div>
                                    <h3>Quick and Easy Search</h3>
                                    <p>We'll find you the best deals available from top bus companies for you to choose from,
                                        combining quality and economy. </p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="featured-box style-1 mb-4">
                                    <div className="featured-box-icon text-primary"> <i className="fas fa-percentage"></i> </div>
                                    <h3>Cheapest Price</h3>
                                    <p>Always get cheapest price with the best in the industry. So you get the best deal every
                                        time.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="featured-box style-1 mb-4">
                                    <div className="featured-box-icon text-primary"> <i className="fas fa-road"></i> </div>
                                    <h3>2 Lakh+ Routes</h3>
                                    <p>Make your road journeys easier across world with 10000+ Operators.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="featured-box style-1 mb-4">
                                    <div className="featured-box-icon text-primary"> <i className="far fa-times-circle"></i> </div>
                                    <h3>Easy Cancellation & Refunds</h3>
                                    <p>Get instant refund and get any booking fees waived off!</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="featured-box style-1 mb-4">
                                    <div className="featured-box-icon text-primary"> <i className="fas fa-heart"></i> </div>
                                    <h3>Every time, anywhere</h3>
                                    <p>Because your trip doesn't end with a ticket, we’re here for you all the way</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="container">
                    <div className="bg-white shadow-md rounded px-4 py-4">
                        <h3 className="text-6 text-center mb-4">Top Bus Routes</h3>
                        <hr className="mx-n4" />
                        <div className="row">
                            <div className="col-md-6">
                                <p className="d-flex align-items-center">Hyderabad To Bengaluru <Link to="#"
                                    className="btn btn-sm btn-outline-primary shadow-none ml-auto"><i
                                        className="fas fa-search d-block d-sm-none"></i> <span className="d-none d-sm-block">Book
                                            Now</span></Link></p>
                                <hr />
                                <p className="d-flex align-items-center">Chennai To Coimbatore<Link to="#"
                                    className="btn btn-sm btn-outline-primary shadow-none ml-auto"><i
                                        className="fas fa-search d-block d-sm-none"></i> <span className="d-none d-sm-block">Book
                                            Now</span></Link></p>
                                <hr />
                                <p className="d-flex align-items-center">Ahmedabad to Mumbai <Link to="#"
                                    className="btn btn-sm btn-outline-primary shadow-none ml-auto"><i
                                        className="fas fa-search d-block d-sm-none"></i> <span className="d-none d-sm-block">Book
                                            Now</span></Link></p>
                                <hr />
                                <p className="d-flex align-items-center">Bhopal To Indore <Link to="#"
                                    className="btn btn-sm btn-outline-primary shadow-none ml-auto"><i
                                        className="fas fa-search d-block d-sm-none"></i> <span className="d-none d-sm-block">Book
                                            Now</span></Link></p>
                                <hr />
                                <p className="d-flex align-items-center">Bangalore to Chennai <Link to="#"
                                    className="btn btn-sm btn-outline-primary shadow-none ml-auto"><i
                                        className="fas fa-search d-block d-sm-none"></i> <span className="d-none d-sm-block">Book
                                            Now</span></Link></p>
                            </div>
                            <div className="col-md-6 mt-3 mt-md-0">
                                <p className="d-flex align-items-center">Hyderabad To Bengaluru <Link to="#"
                                    className="btn btn-sm btn-outline-primary shadow-none ml-auto"><i
                                        className="fas fa-search d-block d-sm-none"></i> <span className="d-none d-sm-block">Book
                                            Now</span></Link></p>
                                <hr />
                                <p className="d-flex align-items-center">Chennai To Coimbatore<Link to="#"
                                    className="btn btn-sm btn-outline-primary shadow-none ml-auto"><i
                                        className="fas fa-search d-block d-sm-none"></i> <span className="d-none d-sm-block">Book
                                            Now</span></Link></p>
                                <hr />
                                <p className="d-flex align-items-center">Ahmedabad to Mumbai <Link to="#"
                                    className="btn btn-sm btn-outline-primary shadow-none ml-auto"><i
                                        className="fas fa-search d-block d-sm-none"></i> <span className="d-none d-sm-block">Book
                                            Now</span></Link></p>
                                <hr />
                                <p className="d-flex align-items-center">Bhopal To Indore <Link to="#"
                                    className="btn btn-sm btn-outline-primary shadow-none ml-auto"><i
                                        className="fas fa-search d-block d-sm-none"></i> <span className="d-none d-sm-block">Book
                                            Now</span></Link></p>
                                <hr />
                                <p className="d-flex align-items-center">Bangalore to Chennai <Link to="#"
                                    className="btn btn-sm btn-outline-primary shadow-none ml-auto"><i
                                        className="fas fa-search d-block d-sm-none"></i> <span className="d-none d-sm-block">Book
                                            Now</span></Link></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section pb-0">
                    <div className="container">
                        <div className="bg-white shadow-md rounded px-4 py-4">
                            <ul className="nav nav-pills justify-content-center" id="myTab" role="tablist">
                                <li className="nav-item"> <Link className="nav-link active" id="mobile-recharge-tab" data-toggle="tab"
                                    to="#mobile-recharge" role="tab" aria-controls="mobile-recharge"
                                    aria-selected="true">Book Bus</Link> </li>
                                <li className="nav-item"> <Link className="nav-link" id="billpayment-tab" data-toggle="tab"
                                    to="#billpayment" role="tab" aria-controls="billpayment" aria-selected="false">Why
                                    Ashtavinayak</Link> </li>
                                <li className="nav-item"> <Link className="nav-link" id="why-Ashtavinayak-tab" data-toggle="tab"
                                    to="#why-Ashtavinayak" role="tab" aria-controls="why-Ashtavinayak"
                                    aria-selected="false">Cancellations</Link> </li>
                            </ul>
                            <div className="tab-content my-3" id="myTabContent">
                                <div className="tab-pane fade show active" id="mobile-recharge" role="tabpanel"
                                    aria-labelledby="mobile-recharge-tab">
                                    <p>Instant Online mobile recharge Iisque persius interesset his et, in quot quidam
                                        persequeris vim, ad mea essent possim iriure. Mutat tacimates id sit. Ridens
                                        mediocritatem ius an, eu nec magna imperdiet. Mediocrem qualisque
                                        in has. Enim utroque perfecto id mei, ad eam tritani labores facilisis, ullum sensibus
                                        no cum. Eius eleifend in quo. At mei alia iriure propriae.</p>
                                    <p>Partiendo voluptatibus ex cum, sed erat fuisset ne, cum ex meis volumus mentitum. Alienum
                                        pertinacia maiestatis ne eum, verear persequeris et vim. Mea cu dicit voluptua
                                        efficiantur, nullam labitur veritus sit cu. Eum denique
                                        omittantur te, in justo epicurei his, eu mei aeque populo. Cu pro facer sententiae, ne
                                        brute graece scripta duo. No placerat quaerendum nec, pri alia ceteros adipiscing ut.
                                        Quo in nobis nostrum intellegebat. Ius hinc
                                        decore erroribus eu, in case prima exerci pri. Id eum prima adipisci. Ius cu minim
                                        theophrastus, legendos pertinacia an nam.</p>
                                </div>
                                <div className="tab-pane fade" id="billpayment" role="tabpanel" aria-labelledby="billpayment-tab">
                                    <p>Partiendo voluptatibus ex cum, sed erat fuisset ne, cum ex meis volumus mentitum. Alienum
                                        pertinacia maiestatis ne eum, verear persequeris et vim. Mea cu dicit voluptua
                                        efficiantur, nullam labitur veritus sit cu. Eum denique
                                        omittantur te, in justo epicurei his, eu mei aeque populo. Cu pro facer sententiae, ne
                                        brute graece scripta duo. No placerat quaerendum nec, pri alia ceteros adipiscing ut.
                                        Quo in nobis nostrum intellegebat. Ius hinc
                                        decore erroribus eu, in case prima exerci pri. Id eum prima adipisci. Ius cu minim
                                        theophrastus, legendos pertinacia an nam.</p>
                                    <p>Instant Online mobile recharge Iisque persius interesset his et, in quot quidam
                                        persequeris vim, ad mea essent possim iriure. Mutat tacimates id sit. Ridens
                                        mediocritatem ius an, eu nec magna imperdiet. Mediocrem qualisque
                                        in has. Enim utroque perfecto id mei, ad eam tritani labores facilisis, ullum sensibus
                                        no cum. Eius eleifend in quo. At mei alia iriure propriae.</p>
                                </div>
                                <div className="tab-pane fade" id="why-Ashtavinayak" role="tabpanel" aria-labelledby="why-Ashtavinayak-tab">
                                    <p>Cu pro facer sententiae, ne brute graece scripta duo. No placerat quaerendum nec, pri
                                        alia ceteros adipiscing ut. Quo in nobis nostrum intellegebat. Ius hinc decore erroribus
                                        eu, in case prima exerci pri. Id eum prima adipisci.
                                        Ius cu minim theophrastus, legendos pertinacia an nam.</p>
                                    <p>Partiendo voluptatibus ex cum, sed erat fuisset ne, cum ex meis volumus mentitum. Alienum
                                        pertinacia maiestatis ne eum, verear persequeris et vim. Mea cu dicit voluptua
                                        efficiantur, nullam labitur veritus sit cu. Eum denique
                                        omittantur te, in justo epicurei his, eu mei aeque populo.</p>
                                    <p>Instant Online mobile recharge Iisque persius interesset his et, in quot quidam
                                        persequeris vim, ad mea essent possim iriure. Mutat tacimates id sit. Ridens
                                        mediocritatem ius an, eu nec magna imperdiet. Mediocrem qualisque
                                        in has. Enim utroque perfecto id mei, ad eam tritani labores facilisis, ullum sensibus
                                        no cum. Eius eleifend in quo. At mei alia iriure propriae.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="section pb-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 col-lg-6 text-center"> <img className="img-fluid" alt=""
                                src="images/app-mobile.png" /> </div>
                            <div className="col-md-7 col-lg-6">
                                <h2 className="text-9 font-weight-600 my-4">Download Our Ashtavinayak<br
                                    className="d-none d-lg-inline-block" /> Mobile App Now</h2>
                                <p className="lead">Download our app for the fastest, most convenient way to send Recharge.</p>
                                <p>Ridens mediocritatem ius an, eu nec magna imperdiet. Mediocrem qualisque in has. Enim utroque
                                    perfecto id mei, ad eam tritani labores facilisis, ullum sensibus no cum. Eius eleifend in
                                    quo.</p>
                                <ul>
                                    <li>Recharge</li>
                                    <li>Bill Payment</li>
                                    <li>Booking Online</li>
                                    <li>and much more.....</li>
                                </ul>
                                <div className="d-flex flex-wrap pt-2"> <Link className="mr-4" to=""><img alt=""
                                    src="images/app-store.png" /></Link><Link to=""><img alt=""
                                        src="images/google-play-store.png" /></Link> </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Home
