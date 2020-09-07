import React, { useState, useEffect } from "react";
import History from "../utils/History";
import { Link } from "react-router-dom";
import applicantsJSON from "../applicants.json";
import Card from "../components/Card/Card";
import "./style.css";
import * as ReactBootStrap from 'react-bootstrap';

const Search = ({ location }) => {
  
  const [applicants, setApplicants] = useState([]);
 

  const [showApplicantsAppoitment, setShowApplicantsAppoitment] = useState([]);
  const [showApplicantsProperty, setShowApplicantsProperty] = useState([]);
  const [showApplicantsInterested, setShowApplicantsInterested] = useState([]);
  const [showApplicantsAccepted, setShowApplicantsAccepted] = useState([]);
  
  const [loading, setLoading] = useState(true)

  const [query, setQuery] = useState([]);

  const [input, setInput] = useState("");

  // fetch data from api
  useEffect(() => {
    console.log("data is printed");
    const params = new URLSearchParams(location.search);
    const q = params.get("q");
    setQuery(q);

    const timeOutPromise = new Promise(resolve => {
      setTimeout(resolve, 2000);
      
    })
    Promise.all([timeOutPromise])
    .then(([response]) => {
      console.log(response);
      setApplicants(applicantsJSON);
      setLoading(false);   
    })
    
  }, []);

  // get params from url and set input with it
  useEffect(() => {
      setShowApplicantsProperty(applicants.filter(element => element.status === "Property Viewed"))
      setShowApplicantsAppoitment(applicants.filter(element => element.status === "Appointment Set"))
      setShowApplicantsInterested(applicants.filter(element => element.status === "Interested"))
      setShowApplicantsAccepted(applicants.filter(element => element.status === "Offer Accepted"))
    setInput(query);
  }, [applicants]);

  // if input changed execute search function
  useEffect(() => {
    History.push("/page/search?q=" + input);
    searchApplication(input);
  }, [input]);

  // Search applicants with search input from form or url
  const searchApplication = (search) => {
    if (!search || search == "") {
      setShowApplicantsProperty(applicants.filter(element => element.status === "Property Viewed"))
      setShowApplicantsAppoitment(applicants.filter(element => element.status === "Appointment Set"))
      setShowApplicantsInterested(applicants.filter(element => element.status === "Interested"))
      setShowApplicantsAccepted(applicants.filter(element => element.status === "Offer Accepted"))
      return
    };
    search.toLowerCase();
    if (applicants !== [] && applicants !== undefined) {
      const temp = applicants.filter(
          (applicant) =>
            applicant.firstName.toLowerCase().includes(search) ||
            applicant.lastName.toLowerCase().includes(search) ||
            applicant.email.toLowerCase().includes(search)
        )
        setShowApplicantsProperty(temp.filter(element => element.status === "Property Viewed"))
        setShowApplicantsAppoitment(temp.filter(element => element.status === "Appointment Set"))
        setShowApplicantsInterested(temp.filter(element => element.status === "Interested"))
        setShowApplicantsAccepted(temp.filter(element => element.status === "Offer Accepted"))
    }
  };

  return (
    <>
      <div>
        <div className="filter-bar-links">
            <div className='nav-item'>
              <form className="search-field">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search for applicant"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                  />
              </form>
            </div>
            <div>
              <select name="Status" value='' className="status-button">
                <option value=""> Status </option>
                <option value=""> Interested </option>
                <option value=""> Appointment Set </option>
                <option value=""> Property Viewed </option>
                <option value=""> Offer Accepted </option>
              </select>
            </div>
            <div>
              <select name="Bid" value='' className="bid-button">
                <option value=""> Bid </option>
                <option value="">  </option>
                <option value="">  </option>
              </select>
            </div>
        </div>
        <div className="loading">
          {loading && <ReactBootStrap.Spinner animation="border" /> }
        </div>
        <div className="error-message">
          {!applicants && <h2> 404 Page Not Found </h2> }
        </div>
        <div className="sections">
          {showApplicantsAppoitment.length > 0 && <>
            <h3> Appointment set (3) </h3>
            <Card
              applicants={showApplicantsAppoitment}
            />
          </>}
        </div>
        <div className="sections">
          <div>
            {showApplicantsProperty.length > 0 && <>
              <h3>Property viewed (5) </h3>
              <Card
                applicants={showApplicantsProperty}
              />
            </>}
          </div>
          <div>
          {showApplicantsInterested.length > 0 && <>
            <h3> Interested (1) </h3>
            <Card
              applicants={showApplicantsInterested}
            />
          </>}
        </div>
        <div>
        {showApplicantsAccepted.length > 0 && <>
          <h3> Offer Accepted </h3>
          <Card
            applicants={showApplicantsAccepted}
          />
        </>}
      </div>
    </div>
  </div>
    </>
  );
};

export default Search;
