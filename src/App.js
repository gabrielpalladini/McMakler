import React, { Component } from "react";
import Applicants from "./Applicants";
import "./App.css";
import applicantsJSON from "./applicants.json";

class App extends React.Component {

    state = {
        applicants: applicantsJSON.map((el, i) => ({ ...el, id: i })),
        search: '',
        status: '',
        //bids: true,
    }

    handleInputChange = e => {
        const target = e.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name

        this.setState({
            [name]: value 
        })
    }

 render() {

    const search = this.state.search.toLowerCase();

    const applicants = this.state.applicants.filter(applicant => {
        return(
            (applicant.firstName.toLowerCase().includes(search) ||
            applicant.lastName.toLowerCase().includes(search)) 
            && (this.state.status === applicant.status || !this.state.status)
            //&& (this.state.bids && applicant.bid)
         );
    });

     return (
         <div className="App">
            <h1> McMakler Applicants </h1>
            <input
                type="text"
                name="search"
                value={this.state.search}
                onChange={this.handleInputChange}
                placeholder="search by name"
            />
            <br />
            <label> Bid </label>
            <input
                type="checkbox"
                name="bids"
                onChange={this.handleInputChange}
                checked={this.state.bids}
            />
            <label> Status </label>
            <select 
                name="status"
                value={this.state.status}
                onChange={this.handleInputChange}
                >
                <option value=""> All </option>
                <option value="Appointment_Set"> Appointment Set </option>
                <option value="Property_Viewed"> Property Viewed </option>
                <option value="Interested"> Interested </option>
                </select>
            <Applicants applicants={applicants} /> 
         </div>
     )
 }

};

export default App;