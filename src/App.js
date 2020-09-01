import React, { Component } from "react";
import applicants from "./applicants";
import "./App.css";

class App extends Component {

    state = {
        search: '',
        status: '',
        bids: true,
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

    const filteredApplicants = applicants.filter(applicant =>
        `${applicant.firstName}${applicant.lastName}`.toLowerCase().includes(this.state.search.toLowerCase())
        && this.state[applicant.bids]
        && {applicant.status === this.state.status || !this.state.status}
        )

     return (
         <div className="App">
            <h1> McMakler Applicants </h1>
            <input
                type="text"
                name="search"
                value={this.state.search}
                onChange={this.handleChange}
                placeholder="search by name"
            />
            <br />
            <label> Bid </label>
            <input
                type="checkbox"
                name="Bid"
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