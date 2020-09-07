import React, { Component } from "react";
import "./App.css";
import { Router, Switch, Route, useParams } from 'react-router-dom';
import Search from './pages/Search';
import History from './utils/History';
import Navbar from './components/navbar/Navbar';

function App() {
    return(
        <>
            <Router history={History}>
                <Navbar />
                <Switch>
                    <Route path='/' component={Search} />
                </Switch>
            </Router>
        </>
    )
}

export default App;