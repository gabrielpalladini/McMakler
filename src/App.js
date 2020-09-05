import React, { Component } from "react";
//import Applicants from "./Applicants";
import "./App.css";
// import applicantsJSON from "./applicants.json";
// import AppointmentSet from "./AppointmentSet"; 
// import Interested from "./Interested"; 
// import PropertyViewed from "./PropertyViewed"; 
import { Router, Switch, Route, useParams } from 'react-router-dom';
import Search from './pages/Search';
import History from './utils/History';
import Navbar from './components/navbar/Navbar';
// import { unmountComponentAtNode } from "react-dom";

function App() {
    return(
        <>
            <Router history={History}>
                <Navbar />
                <Switch>
                    <Route path='/page/search' component={Search} />
                </Switch>
            </Router>
        </>
    )
}

export default App;



// create hooks here and a handler that pushes the state up, whatever in the state. Create a route in search that it connected to inpput state 