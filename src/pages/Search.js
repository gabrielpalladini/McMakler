import React, { useState, useEffect } from "react";
import History from "../utils/History";
import { Link } from "react-router-dom";
import applicantsJSON from "../applicants.json";
import Card from "../components/Card/Card";

const Search = ({ location }) => {
  // const [status, setStatus] = useState('');
  const [applicants, setApplicants] = useState([]);
  // const [showApplicants, setShowApplicants] = useState([]);

  const [showApplicantsAppoitment, setShowApplicantsAppoitment] = useState([]);
  const [showApplicantsProperty, setShowApplicantsProperty] = useState([]);
  const [showApplicantsInterested, setShowApplicantsInterested] = useState([]);
  const [showApplicantsAccepted, setShowApplicantsAccepted] = useState([]);

  const [query, setQuery] = useState([]);

  const [input, setInput] = useState("");

  // fetch data from api
  useEffect(() => {
    console.log("data is printed");
    setApplicants(applicantsJSON);
    const params = new URLSearchParams(location.search);
    const q = params.get("q");
    setQuery(q);
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
        <form className="mt-5">
          <div>
            <input
              type="text"
              className="form-control"
              placeholder="Search by first, last name or email..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
        </form>

        <label> Bid </label>
        <input
          type="checkbox"
          name="bids"
          // onChange={this.handleInputChange}
          // checked={this.state.bids}
        />
        <div>
          {showApplicantsAppoitment.length > 0 && <>
            <h2>Appointment</h2>
            <Card
              applicants={showApplicantsAppoitment}
            />
          </>}
        </div>
        <div>
          {showApplicantsProperty.length > 0 && <>
            <h2>Property</h2>
            <Card
              applicants={showApplicantsProperty}
            />
          </>}
        </div>
        <div>
        {showApplicantsInterested.length > 0 && <>
          <h2>Appointment</h2>
          <Card
            applicants={showApplicantsInterested}
          />
        </>}
      </div>
      <div>
      {showApplicantsAccepted.length > 0 && <>
        <h2>Appointment</h2>
        <Card
          applicants={showApplicantsAccepted}
        />
      </>}
    </div>
      </div>
    </>
  );
};

export default Search;
