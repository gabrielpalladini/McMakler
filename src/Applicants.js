import React from "react";

const Applicants = props => {
    return (
        <table>
            <thead>
                <tr>
                    <th> First Name </th>
                    <th> Last Name </th>
                    <th> Email</th>
                    <th> Phone </th>
                    <th> Status</th>
                    <th> Status Date </th>
                    <th> Bid </th>
                </tr>
            </thead>
            <tbody>
                {props.filteredApplicants.map(applicant => {
                    return (
                        <tr key={applicant.id}>
                            <td>{applicant.firstName}</td>
                            <td>{applicant.LastName}</td>
                            <td>{applicant.phone}</td>
                            <td>{applicant.email}</td>
                            <td>{applicant.Status}</td>
                            <td>{applicant.statusDate}</td>
                            <td>{applicant.bid}</td>
                        </tr> 
                    );
                })}
            </tbody>
        </table>
    );
};

export default Applicants;