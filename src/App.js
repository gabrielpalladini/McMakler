import React, { Component } from "react";
//import Applicants from "./Applicants";
import "./App.css";
// import applicantsJSON from "./applicants.json";
// import AppointmentSet from "./AppointmentSet"; 
// import Interested from "./Interested"; 
// import PropertyViewed from "./PropertyViewed"; 
import { Router, Switch, Route } from 'react-router-dom';
import Search from './pages/Search';
import History from './utils/History';

function App() {
    return(
        <>
            <Router history={History}>
                <Switch>
                    <Route path='/page/search' component={Search} />
                </Switch>
            </Router>
        </>
    )
}

export default App;
