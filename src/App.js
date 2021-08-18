import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import ForgotPassword from './pages/ForgotPassword';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { userAuthSession } from './redux/User/user.actions';
import { useDispatch } from 'react-redux';
import MyAccount from './pages/MyAccount';
import WithAuth from './hoc/withAuth';
import WithAdminAuth from './hoc/WithAdminAuth';
import Admin from './pages/Admin';
import Contact from './pages/Contact';
import Booking from './pages/Booking';




const App = props => {
    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(userAuthSession());

    }, [dispatch]);


    return (

        <Router>
            <Header></Header>
            <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/login" render={() => <Login></Login>}></Route>
                <Route path="/register" render={() => <Register></Register>}></Route>
                <Route path="/forgot-password" component={ForgotPassword}></Route>
                <Route path="/contact" component={Contact}></Route>
                <Route path="/booking" component={Booking}></Route>
                <Route path="/my-account" render={() => <WithAuth><MyAccount></MyAccount></WithAuth>}></Route>
                <Route path="/ankush-sir" render={() => <WithAdminAuth><Admin></Admin></WithAdminAuth>}></Route>


            </Switch>
            <Footer></Footer>
        </Router>
    )
}



export default App;
