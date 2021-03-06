import React from 'react';
import { Link } from 'react-router-dom';

const Booking = () => {
    return (
        <>
            <section className="page-header
    page-header-text-light
    bg-secondary">
                <div className="container">
                    <div className="row
            align-items-center">
                        <div className="col-md-8">
                            <h1>Bus - List Page</h1>
                        </div>
                        <div className="col-md-4">
                            <ul className="breadcrumb
                    justify-content-start
                    justify-content-md-end
                    mb-0">
                                <li>
                                    <Link to="index.html">Home</Link>
                                </li>
                                <li>
                                    <Link to="booking-bus.html">Bus</Link>
                                </li>
                                <li className="active">Bus
                                    List Page</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <div id="content">
                <section className="container">
                    <div className="row">
                        <div className="col mb-2">
                            <form id="bookingBus" method="post">
                                <div className="form-row">
                                    <div className="col-md-6
                            col-lg
                            form-group">
                                        <input type="text" className="form-control" id="busFrom" required placeholder="From" />
                                        <span className="icon-inside"><i className="fas
                                    fa-map-marker-alt"></i></span>
                                    </div>
                                    <div className="col-md-6
                            col-lg
                            form-group">
                                        <input type="text" className="form-control" id="busTo" required placeholder="To" />
                                        <span className="icon-inside"><i className="fas
                                    fa-map-marker-alt"></i></span>
                                    </div>
                                    <div className="col-md-4
                            col-lg
                            form-group">
                                        <input id="busDepart" type="text" className="form-control" required placeholder="Depart
                                Date" />
                                        <span className="icon-inside"><i className="far
                                    fa-calendar-alt"></i></span>
                                    </div>
                                    <div className="col-md-4
                            col-lg
                            travellers-class
                            form-group">
                                        <input type="text" id="busTravellersClass" className="travellers-class-input
                                form-control" name="bus-travellers-class" placeholder="Seats" readonly required
                                            onkeypress="return
                                false;" />
                                        <span className="icon-inside"><i className="fas
                                    fa-caret-down"></i></span>
                                        <div className="travellers-dropdown">
                                            <div className="row
                                    align-items-center
                                    mb-3">
                                                <div className="col-sm-7">
                                                    <p className="mb-sm-0">Seats</p>
                                                </div>
                                                <div className="col-sm-5">
                                                    <div className="qty
                                            input-group">
                                                        <div className="input-group-prepend">
                                                            <button type="button" className="btn
                                                    bg-light-4" data-value="decrease" data-target="#adult-travellers"
                                                                data-toggle="spinner">-</button>
                                                        </div>
                                                        <input type="text" data-ride="spinner" id="adult-travellers" className="qty-spinner
                                                form-control" value="1" readonly />
                                                        <div className="input-group-append">
                                                            <button type="button" className="btn
                                                    bg-light-4" data-value="increase" data-target="#adult-travellers"
                                                                data-toggle="spinner">+</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <button className="btn
                                    btn-primary
                                    btn-block
                                    submit-done" type="button">Done</button>
                                        </div>
                                    </div>
                                    <div className="col-md-4
                            col-lg
                            form-group">
                                        <button className="btn
                                btn-primary
                                btn-block" type="submit">Search</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="row">


                        <aside className="col-md-3">
                            <div className="bg-white
                    shadow-md rounded
                    p-3">
                                <h3 className="text-5">Filter</h3>
                                <hr className="mx-n3" />
                                <div className="accordion
                        accordion-alternate
                        style-2 mt-n3" id="toggleAlternate">
                                    <div className="card">
                                        <div className="card-header" id="departure">
                                            <h5 className="mb-0">
                                                <Link to="#" className="collapse" data-toggle="collapse"
                                                    data-target="#toggleDeparture" aria-expanded="true" aria-controls="togglePrice">
                                                    Departure
                                                    Time</Link>
                                            </h5>
                                        </div>
                                        <div id="toggleDeparture" className="collapse
                                show" aria-labelledby="departure">
                                            <div className="card-body">
                                                <p><span className="slider-time-departure">00:00</span>
                                                    -
                                                    <span className="slider-time-departure">23:59</span>
                                                </p>
                                                <div id="slider-range-departure"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="price">
                                            <h5 className="mb-0">
                                                <Link to="#" className="collapse" data-toggle="collapse" data-target="#togglePrice"
                                                    aria-expanded="true" aria-controls="togglePrice">Price</Link>
                                            </h5>
                                        </div>
                                        <div id="togglePrice" className="collapse
                                show" aria-labelledby="price">
                                            <div className="card-body">
                                                <p>
                                                    <input id="amount" type="text" readonly className="form-control
                                            border-0
                                            bg-transparent
                                            p-0" />
                                                </p>
                                                <div id="slider-range"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="busType">
                                            <h5 className="mb-0">
                                                <Link to="#" className="collapse" data-toggle="collapse"
                                                    data-target="#togglebusType" aria-expanded="true" aria-controls="togglebusType">
                                                    Bus
                                                    Type</Link>
                                            </h5>
                                        </div>
                                        <div id="togglebusType" className="collapse
                                show" aria-labelledby="busType">
                                            <div className="card-body">
                                                <div className="custom-control
                                        custom-checkbox">
                                                    <input type="checkbox" id="sleeper" name="busType"
                                                        className="custom-control-input/" />
                                                    <label className="custom-control-label" for="sleeper">Sleeper</label>
                                                </div>
                                                <div className="custom-control
                                        custom-checkbox">
                                                    <input type="checkbox" id="seater" name="busType"
                                                        className="custom-control-input" />
                                                    <label className="custom-control-label" for="seater">Seater</label>
                                                </div>
                                                <div className="custom-control
                                        custom-checkbox">
                                                    <input type="checkbox" id="semiseater" name="busType"
                                                        className="custom-control-input" />
                                                    <label className="custom-control-label" for="semiseater">Semi-Seater</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="busOperators">
                                            <h5 className="mb-0">
                                                <Link to="#" className="collapse" data-toggle="collapse"
                                                    data-target="#togglebusOperators" aria-expanded="true"
                                                    aria-controls="togglebusOperators">Bus
                                                    Operators</Link>
                                            </h5>
                                        </div>
                                        <div id="togglebusOperators" className="collapse
                                show" aria-labelledby="busOperators">
                                            <div className="card-body">
                                                <div className="custom-control
                                        custom-checkbox">
                                                    <input type="checkbox" id="akTour" name="busOperators"
                                                        className="custom-control-input" />
                                                    <label className="custom-control-label" for="akTour">AK
                                                        Tour
                                                        &amp;
                                                        Travels</label>
                                                </div>
                                                <div className="custom-control
                                        custom-checkbox">
                                                    <input type="checkbox" id="vikasTravels" name="busOperators"
                                                        className="custom-control-input" />
                                                    <label className="custom-control-label" for="vikasTravels">Vikas
                                                        Travels</label>
                                                </div>
                                                <div className="custom-control
                                        custom-checkbox">
                                                    <input type="checkbox" id="gujaratTravels" name="busOperators"
                                                        className="custom-control-input" />
                                                    <label className="custom-control-label" for="gujaratTravels">Gujarat
                                                        Travels</label>
                                                </div>
                                                <div className="custom-control
                                        custom-checkbox">
                                                    <input type="checkbox" id="shrinathTravel" name="busOperators"
                                                        className="custom-control-input" />
                                                    <label className="custom-control-label" for="shrinathTravel">Shrinath
                                                        Travel
                                                        Agency</label>
                                                </div>
                                                <div className="custom-control
                                        custom-checkbox">
                                                    <input type="checkbox" id="indianTravels" name="busOperators"
                                                        className="custom-control-input" />
                                                    <label className="custom-control-label" for="indianTravels">Indian
                                                        Travels
                                                        Agency</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </aside>


                        <div className="col-md-9 mt-4
                mt-md-0">
                            <div className="bg-white
                    shadow-md rounded
                    py-4">
                                <div className="mx-3
                        mb-3
                        text-center">
                                    <h2 className="text-6
                            mb-4">Mumbai
                                        <small className="mx-2">to</small>Surat
                                    </h2>
                                </div>
                                <div className="text-1
                        bg-light-3
                        border
                        border-right-0
                        border-left-0
                        py-2 px-3">
                                    <div className="row">
                                        <div className="col
                                col-sm-3"><span className="d-none
                                    d-sm-block">Operators</span></div>
                                        <div className="col
                                col-sm-2
                                text-center">Departure</div>
                                        <div className="col-sm-2
                                text-center
                                d-none
                                d-sm-block">Duration</div>
                                        <div className="col
                                col-sm-2
                                text-center">Arrival</div>
                                        <div className="col
                                col-sm-3
                                text-center
                                d-none
                                d-sm-block">Price</div>
                                    </div>
                                </div>
                                <div className="bus-list">
                                    <div className="bus-item">
                                        <div className="row
                                align-items-sm-center
                                flex-row
                                py-4
                                px-3">
                                            <div className="col
                                    col-sm-3">
                                                <span className="text-3
                                        text-dark
                                        operator-name">AK
                                                    Tour
                                                    &
                                                    Travels</span>
                                                <span className="text-1
                                        text-muted
                                        d-block">AC
                                                    Sleeper</span>
                                            </div>
                                            <div className="col
                                    col-sm-2
                                    text-center
                                    time-info">
                                                <span className="text-4
                                        text-dark">12:00</span>
                                                <small className="text-muted
                                        d-block">Mumbai</small>
                                            </div>
                                            <div className="col
                                    col-sm-2
                                    text-center
                                    d-none
                                    d-sm-block
                                    time-info">
                                                <span className="text-3
                                        duration">06h
                                                    32m</span>
                                                <small className="text-muted
                                        d-block">12
                                                    Stops</small>
                                            </div>
                                            <div className="col
                                    col-sm-2
                                    text-center
                                    time-info">
                                                <span className="text-4
                                        text-dark">05:15</span>
                                                <small className="text-muted
                                        d-block">Surat</small>
                                            </div>
                                            <div className="col-12
                                    col-sm-3
                                    align-self-center
                                    text-right
                                    text-sm-center
                                    mt-2
                                    mt-sm-0">
                                                <div className="d-inline-block
                                        d-sm-block
                                        text-dark
                                        text-5
                                        price
                                        mb-sm-1">$250</div>
                                                <Link to="#" className="btn
                                        btn-sm
                                        btn-outline-primary
                                        shadow-none" data-toggle="modal" data-target="#select-busseats"><i className="fas
                                            fa-ellipsis-h
                                            d-none
                                            d-sm-block
                                            d-lg-none" data-toggle="tooltip" title="Select
                                            Seats"></i>
                                                    <span className="d-block
                                            d-sm-none
                                            d-lg-block">Select
                                                        Seats</span></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bus-item">
                                        <div className="row
                                align-items-sm-center
                                flex-row
                                py-4
                                px-3">
                                            <div className="col
                                    col-sm-3">
                                                <span className="text-3
                                        text-dark
                                        operator-name">Gujarat
                                                    Travels</span>
                                                <span className="text-1
                                        text-muted
                                        d-block">AC
                                                    Sleeper</span>
                                            </div>
                                            <div className="col
                                    col-sm-2
                                    text-center
                                    time-info">
                                                <span className="text-4
                                        text-dark">12:00</span>
                                                <small className="text-muted
                                        d-block">Mumbai</small>
                                            </div>
                                            <div className="col
                                    col-sm-2
                                    text-center
                                    d-none
                                    d-sm-block
                                    time-info">
                                                <span className="text-3
                                        duration">06h
                                                    32m</span>
                                                <small className="text-muted
                                        d-block">12
                                                    Stops</small>
                                            </div>
                                            <div className="col
                                    col-sm-2
                                    text-center
                                    time-info">
                                                <span className="text-4
                                        text-dark">05:15</span>
                                                <small className="text-muted
                                        d-block">Surat</small>
                                            </div>
                                            <div className="col-12
                                    col-sm-3
                                    align-self-center
                                    text-right
                                    text-sm-center
                                    mt-2
                                    mt-sm-0">
                                                <div className="d-inline-block
                                        d-sm-block
                                        text-dark
                                        text-5
                                        price
                                        mb-sm-1">$195</div>
                                                <Link to="#" className="btn
                                        btn-sm
                                        btn-outline-primary
                                        shadow-none" data-toggle="modal" data-target="#select-busseats"><i className="fas
                                            fa-ellipsis-h
                                            d-none
                                            d-sm-block
                                            d-lg-none" data-toggle="tooltip" title="Select
                                            Seats"></i>
                                                    <span className="d-block
                                            d-sm-none
                                            d-lg-block">Select
                                                        Seats</span></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bus-item">
                                        <div className="row
                                align-items-sm-center
                                flex-row
                                py-4
                                px-3">
                                            <div className="col
                                    col-sm-3">
                                                <span className="text-3
                                        text-dark
                                        operator-name">Shrinath
                                                    Travels</span>
                                                <span className="text-1
                                        text-muted
                                        d-block">AC
                                                    Sleeper</span>
                                            </div>
                                            <div className="col
                                    col-sm-2
                                    text-center
                                    time-info">
                                                <span className="text-4
                                        text-dark">12:00</span>
                                                <small className="text-muted
                                        d-block">Mumbai</small>
                                            </div>
                                            <div className="col
                                    col-sm-2
                                    text-center
                                    d-none
                                    d-sm-block
                                    time-info">
                                                <span className="text-3
                                        duration">06h
                                                    32m</span>
                                                <small className="text-muted
                                        d-block">12
                                                    Stops</small>
                                            </div>
                                            <div className="col
                                    col-sm-2
                                    text-center
                                    time-info">
                                                <span className="text-4
                                        text-dark">05:15</span>
                                                <small className="text-muted
                                        d-block">Surat</small>
                                            </div>
                                            <div className="col-12
                                    col-sm-3
                                    align-self-center
                                    text-right
                                    text-sm-center
                                    mt-2
                                    mt-sm-0">
                                                <div className="d-inline-block
                                        d-sm-block
                                        text-dark
                                        text-5
                                        price
                                        mb-sm-1">$221</div>
                                                <Link to="#" className="btn
                                        btn-sm
                                        btn-outline-primary
                                        shadow-none" data-toggle="modal" data-target="#select-busseats"><i className="fas
                                            fa-ellipsis-h
                                            d-none
                                            d-sm-block
                                            d-lg-none" data-toggle="tooltip" title="Select
                                            Seats"></i>
                                                    <span className="d-block
                                            d-sm-none
                                            d-lg-block">Select
                                                        Seats</span></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bus-item">
                                        <div className="row
                                align-items-sm-center
                                flex-row
                                py-4
                                px-3">
                                            <div className="col
                                    col-sm-3">
                                                <span className="text-3
                                        text-dark
                                        operator-name">Vikas
                                                    Travels</span>
                                                <span className="text-1
                                        text-muted
                                        d-block">AC
                                                    Sleeper</span>
                                            </div>
                                            <div className="col
                                    col-sm-2
                                    text-center
                                    time-info">
                                                <span className="text-4
                                        text-dark">12:00</span>
                                                <small className="text-muted
                                        d-block">Mumbai</small>
                                            </div>
                                            <div className="col
                                    col-sm-2
                                    text-center
                                    d-none
                                    d-sm-block
                                    time-info">
                                                <span className="text-3
                                        duration">06h
                                                    32m</span>
                                                <small className="text-muted
                                        d-block">12
                                                    Stops</small>
                                            </div>
                                            <div className="col
                                    col-sm-2
                                    text-center
                                    time-info">
                                                <span className="text-4
                                        text-dark">05:15</span>
                                                <small className="text-muted
                                        d-block">Surat</small>
                                            </div>
                                            <div className="col-12
                                    col-sm-3
                                    align-self-center
                                    text-right
                                    text-sm-center
                                    mt-2
                                    mt-sm-0">
                                                <div className="d-inline-block
                                        d-sm-block
                                        text-dark
                                        text-5
                                        price
                                        mb-sm-1">$245</div>
                                                <Link to="#" className="btn
                                        btn-sm
                                        btn-outline-primary
                                        shadow-none" data-toggle="modal" data-target="#select-busseats"><i className="fas
                                            fa-ellipsis-h
                                            d-none
                                            d-sm-block
                                            d-lg-none" data-toggle="tooltip" title="Select
                                            Seats"></i>
                                                    <span className="d-block
                                            d-sm-none
                                            d-lg-block">Select
                                                        Seats</span></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bus-item">
                                        <div className="row
                                align-items-sm-center
                                flex-row
                                py-4
                                px-3">
                                            <div className="col
                                    col-sm-3">
                                                <span className="text-3
                                        text-dark
                                        operator-name">VTK
                                                    Travels</span>
                                                <span className="text-1
                                        text-muted
                                        d-block">AC
                                                    Sleeper</span>
                                            </div>
                                            <div className="col
                                    col-sm-2
                                    text-center
                                    time-info">
                                                <span className="text-4
                                        text-dark">12:00</span>
                                                <small className="text-muted
                                        d-block">Mumbai</small>
                                            </div>
                                            <div className="col
                                    col-sm-2
                                    text-center
                                    d-none
                                    d-sm-block
                                    time-info">
                                                <span className="text-3
                                        duration">06h
                                                    32m</span>
                                                <small className="text-muted
                                        d-block">12
                                                    Stops</small>
                                            </div>
                                            <div className="col
                                    col-sm-2
                                    text-center
                                    time-info">
                                                <span className="text-4
                                        text-dark">05:15</span>
                                                <small className="text-muted
                                        d-block">Surat</small>
                                            </div>
                                            <div className="col-12
                                    col-sm-3
                                    align-self-center
                                    text-right
                                    text-sm-center
                                    mt-2
                                    mt-sm-0">
                                                <div className="d-inline-block
                                        d-sm-block
                                        text-dark
                                        text-5
                                        price
                                        mb-sm-1">$199</div>
                                                <Link to="#" className="btn
                                        btn-sm
                                        btn-outline-primary
                                        shadow-none" data-toggle="modal" data-target="#select-busseats"><i className="fas
                                            fa-ellipsis-h
                                            d-none
                                            d-sm-block
                                            d-lg-none" data-toggle="tooltip" title="Select
                                            Seats"></i>
                                                    <span className="d-block
                                            d-sm-none
                                            d-lg-block">Select
                                                        Seats</span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <ul className="pagination
                        justify-content-center
                        mt-4 mb-0">
                                    <li className="page-item
                            disabled">
                                        <Link className="page-link" to="#" tabindex="-1"><i className="fas
                                    fa-angle-left"></i></Link>
                                    </li>
                                    <li className="page-item
                            active">
                                        <Link className="page-link" to="#">1
                                            <span className="sr-only">(current)</span></Link>
                                    </li>
                                    <li className="page-item">
                                        <Link className="page-link" to="#">2</Link>
                                    </li>
                                    <li className="page-item">
                                        <Link className="page-link" to="#">3</Link>
                                    </li>
                                    <li className="page-item">
                                        <Link className="page-link" to="#"><i className="fas
                                    fa-angle-right"></i></Link>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </section>
            </div>


            <div id="select-busseats" className="modal
    fade" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-lg
        modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Bus
                                Booking Details</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="bus-details">
                                <div className="row
                        align-items-sm-center
                        flex-row mb-4">
                                    <div className="col
                            col-sm-3">
                                        <span className="text-4
                                text-dark
                                operator-name">AK
                                            Tour &
                                            Travels</span>
                                        <span className="text-muted
                                d-block">AC
                                            Sleeper</span>
                                    </div>
                                    <div className="col
                            col-sm-3
                            text-center
                            time-info">
                                        <span className="text-5
                                text-dark">12:00</span>
                                        <small className="text-muted
                                d-block">Mumbai</small>
                                    </div>
                                    <div className="col
                            col-sm-3
                            text-center
                            d-none
                            d-sm-block
                            time-info">
                                        <span className="text-3
                                duration">06h
                                            32m</span>
                                        <small className="text-muted
                                d-block">12
                                            Stops</small>
                                    </div>
                                    <div className="col
                            col-sm-3
                            text-center
                            time-info">
                                        <span className="text-5
                                text-dark">05:15</span>
                                        <small className="text-muted
                                d-block">Surat</small>
                                    </div>
                                </div>
                                <ul className="nav
                        nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item">
                                        <Link className="nav-link
                                active" id="first-tab" data-toggle="tab" to="#first" role="tab" aria-controls="first"
                                            aria-selected="true">Available
                                            Seats</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" id="second-tab" data-toggle="tab" to="#second" role="tab"
                                            aria-controls="second" aria-selected="false">Cancellation
                                            Fee</Link>
                                    </li>
                                </ul>
                                <div className="tab-content
                        my-3" id="myTabContent">
                                    <div className="tab-pane
                            fade show
                            active" id="first" role="tabpanel" aria-labelledby="first-tab">
                                        <div className="row">
                                            <div className="col-12
                                    col-lg-6
                                    text-center">
                                                <p className="text-muted
                                        text-1">Click
                                                    on
                                                    Seat
                                                    to
                                                    select/
                                                    deselect</p>
                                                <div id="seat-map">
                                                    <div className="front-indicator">Front</div>
                                                </div>
                                                <div id="legend"></div>
                                            </div>
                                            <div className="col-12
                                    col-lg-6
                                    mt-3
                                    mt-lg-0">
                                                <div className="booking-details">
                                                    <h2 className="text-5">Booking
                                                        Details</h2>
                                                    <p>Selected
                                                        Seats
                                                        (<span id="counter">0</span>):</p>
                                                    <ul id="selected-seats">
                                                    </ul>
                                                    <div className="d-flex
                                            bg-light-4
                                            px-3
                                            py-2
                                            mb-3">Total
                                                        Fare:
                                                        <span className="text-dark
                                                text-5
                                                font-weight-600
                                                ml-2">$<span id="total">0</span></span>
                                                    </div>
                                                    <button className="btn
                                            btn-primary
                                            btn-block">Continue</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane
                            fade" id="second" role="tabpanel" aria-labelledby="second-tab">
                                        <table className="table
                                table-hover
                                table-bordered
                                bg-light">
                                            <thead>
                                                <tr>
                                                    <td>Hours
                                                        before
                                                        Departure</td>
                                                    <td className="text-center">Refund
                                                        Percentage</td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Before
                                                        0
                                                        Hrs.</td>
                                                    <td className="text-center">0%</td>
                                                </tr>
                                                <tr>
                                                    <td>Before
                                                        24
                                                        Hrs.</td>
                                                    <td className="text-center">30%</td>
                                                </tr>
                                                <tr>
                                                    <td>Before
                                                        48
                                                        Hrs.</td>
                                                    <td className="text-center">60%</td>
                                                </tr>
                                                <tr>
                                                    <td>Before
                                                        60
                                                        Hrs.</td>
                                                    <td className="text-center">75%</td>
                                                </tr>
                                                <tr>
                                                    <td>Above
                                                        60
                                                        Hrs.
                                                    </td>
                                                    <td className="text-center">80%</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <p className="font-weight-bold">Terms
                                            &
                                            Conditions</p>
                                        <ul>
                                            <li>The
                                                penalty
                                                is
                                                subject
                                                to
                                                24
                                                hrs
                                                before
                                                departure.
                                                No
                                                Changes
                                                are
                                                allowed
                                                after
                                                that.</li>
                                            <li>The
                                                charges
                                                are
                                                per
                                                seat.</li>
                                            <li>Partial
                                                cancellation
                                                is
                                                not
                                                allowed
                                                on
                                                tickets
                                                booked
                                                under
                                                special
                                                discounted
                                                fares.</li>
                                            <li>In
                                                case
                                                of
                                                no-show
                                                or
                                                ticket
                                                not
                                                cancelled
                                                within
                                                the
                                                stipulated
                                                time,
                                                only
                                                statutory
                                                taxes
                                                are
                                                refundable
                                                subject
                                                to
                                                Service
                                                Fee.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Booking;
