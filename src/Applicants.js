import React from "react";
import "./Applicants.css";
const Applicants = props => {
    return (
        <div>
            {props.applicants.map(applicant => {
                return (
                        <div className="container" key={applicant.id}>
                            <h2>{applicant.firstName}</h2>
                            <h2>{applicant.lastName}</h2>
                            <h2>{applicant.phone}</h2>
                            <h2>{applicant.email}</h2>
                            <h2>{applicant.status}</h2>
                            <h2>{applicant.statusDate}</h2>
                            <h2>{applicant.bid}</h2>
                        </div> 
                    );
                })}
            
        </div>
    );
};

export default Applicants;