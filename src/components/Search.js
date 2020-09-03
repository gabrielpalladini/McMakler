import React, { useState, useEffect } from 'react';
import History from './History';
import { Link } from 'react-router-dom';
import applicantsJSON from "../applicants.json";
import AppointmentSet from "../AppointmentSet"; 
import Interested from "../Interested"; 
import PropertyViewed from "../PropertyViewed"; 

const Search = ({ location }) => {
  // useState hooks for input and language

//   const [status, setStatus] = useState('');

  const [input, setInput] = useState('');

  // equivalent to componentDidMount, fires once when component mounts
  useEffect(() => {
    // get all the URLParams
    const params = new URLSearchParams(location.search);
    // get the q param
    const q = params.get('q');
    
    // set language in state to the q parameter
    // setStatus(q ? q : 'MatLab');
    //eslint-disable-next-line
  }, []);

  // function for handling form submit
  const submitAction = (e) => {
    // prevents default, so page won't reload on form submit
    e.preventDefault();
    
    // set input in state
    setInput(e.target.value);
    // add query string to URL
    History.push('/page/search?q=' + input);
    // clear the input
    setInput('');
  };

  const search = input.toLowerCase();

  const applicants = applicantsJSON.filter(applicant => {
    return(
        (applicant.firstName.toLowerCase().includes(search) || 
        applicant.lastName.toLowerCase().includes(search) 
        || applicant.email.toLowerCase().includes(search))
        //  && (this.state.status === applicant.status || !this.state.status)
        //&& (this.state.bids && applicant.bid)
     );
});



  return (
    <>
      <div >
        <div  style={{ height: '100vh' }}>

          <form onSubmit={submitAction} className='mt-5'>
            <div >
              <input
                type='text'
                className='form-control'
                placeholder='Search by first, last name or email...'
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />

              <div >
                <button type='submit'>
                  Go!
                </button>

               
              </div>
            </div>
          </form>

          <label> Bid </label>
          <input
              type="checkbox"
              name="bids"
              // onChange={this.handleInputChange}
              // checked={this.state.bids}
            />
          < AppointmentSet applicants={applicants}/>
          < PropertyViewed applicants={applicants}/>
          < Interested applicants={applicants}/>
        </div>
      </div>
    </>
  );
};

export default Search;
