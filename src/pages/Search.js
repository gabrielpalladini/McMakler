import React, { useState, useEffect } from 'react';
import History from '../utils/History';
import { Link } from 'react-router-dom';
import applicantsJSON from "../applicants.json";
import Card from "../components/Card";

const Search = ({ location }) => {
 
  // const [status, setStatus] = useState('');
  const [applicants, setApplicants] = useState('{}');
  const [showApplicants, setShowApplicants] = useState('[]');
  const [input, setInput] = useState('');

  // fetch data from api
  useEffect(() => {
    console.log("data is printed") 
    setApplicants(applicantsJSON)
  }, []) 

  // get params from url and set input with it 
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const q = params.get('q');
    setInput(q)
  }, [applicants]);


  // if input changed execute search function
  useEffect(() => {
    History.push('/page/search?q=' + input)
    searchApplication(input)
  }, [input]);

  // Search applicants with search input from form or url 
  const searchApplication = (search) => {
    if(!search) return setShowApplicants(applicants)
    search.toLowerCase();
    if(applicants !== [] && applicants!== undefined) {
      setShowApplicants(applicants.filter(applicant =>
        applicant.firstName.toLowerCase().includes(search) || 
        applicant.lastName.toLowerCase().includes(search) 
        || applicant.email.toLowerCase().includes(search)
        ))
    }
  }

  return (
    <>
        <div>
          <form className='mt-5'>
            <div >
              <input
                type='text'
                className='form-control'
                placeholder='Search by first, last name or email...'
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
            < Card applicants={showApplicants === [] ? applicants : showApplicants} />
        </div>
    </>
  );
};

export default Search;
