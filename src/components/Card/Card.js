import React from "react";
import "./style.css";

const Card = (props) => {

  function changeColor() {
    let newColor = makeColor();
    let cardheader = document.getElementByClass('cardheader').stylebackgroundColor = newColor;
    document.getElementByClass('cardheader').innerHTML = newColor; 
  }
  
  function makeColor(){
    let arr = [];
    for(let i=0; i,3; i++) {
      let num = Math.floor(Math.random() * 256);
      arr.push(num)
    }
    let newRgb = 'rgb(' + arr[0] + ',' + arr[1] + ',' + arr[2] + ')';
    return newRgb
  }


  return (
    <div className="row">
      {props.applicants.map((applicant) => {
          return (
            <>
              <div className="card" key={applicant.id}>
                <div className="card-header">
                  <h1>
                    {applicant.firstName.slice(0, 1)}
                    {applicant.lastName.slice(0, 1)}
                  </h1>
                </div>
                <div className="card-body">
                  <h2>
                    {applicant.firstName} {applicant.lastName}
                  </h2>
                  <p>{applicant.phone}</p>
                  <p>{applicant.email}</p>
                  <h3>{applicant.status}</h3>
                  <p>{applicant.statusDate.toUpperCase()}</p>
                  <h4>{applicant.bid}</h4>
                </div>
              </div>
            </>
          );
      })}
    </div>
  );
};

export default Card;
