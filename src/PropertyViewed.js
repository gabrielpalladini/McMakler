import React from "react";
import "./Applicants.css";
const PropertyViewed = props => {
    return (
        <div className= "row">
        
            {props.applicants.map(applicant => {
                if(applicant.status === "Property Viewed" && applicant.id === 5) {
                return <h1> Property Viewed </h1> 
                }
            })}

            {props.applicants.map(applicant => {

                if(applicant.status === "Property Viewed") {
                return (
                   
                        <div className="card" key={applicant.id}>
                            <div className="card-header">
                                <h1> {applicant.firstName.slice(0,1)}{applicant.lastName.slice(0,1)}</h1>
                            </div>
                            <div className="card-body">
                                <p>{applicant.firstName} {applicant.lastName}</p>
                                <p>{applicant.phone}</p>
                                <p>{applicant.email}</p>
                                <p>{applicant.status}</p>
                                <p>{applicant.statusDate.toUpperCase()}</p>
                                <p>{applicant.bid}</p>
                            </div>
                        </div> 
                    );
            }})}
            
        </div>
    );
};

export default PropertyViewed;