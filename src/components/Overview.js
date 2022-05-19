import React from "react";
import './Overview.css';

const Overview = (props) => {
  const { info, education, experience } = props;

  return (
    <div className=" row g-3 justify-content-center">
      <div className="darktheme col-md-2 d-grid gap-3 text-white">
        <div className="headshot">
          <p className="h3 text-center"> {info.name} </p>
          <img src="https://source.unsplash.com/iEEBWgY_6lA" className="rounded-circle img-thumbnail mx-auto d-block" alt="headshot"></img>
        </div>
        
          <p className="h3 mt-10">CONTACT</p>
          <p className="h6 mb-0">Email:</p>{info.email}
          <p className="h6 mb-0">Phone:</p>{info.phone}
        
      </div>

      <div className="col-md-5 bg-light ">
        <div>
          <p className="h3 text-primary shadow p-3 mb-5 bg-body rounded">Education</p>
          <p className="h6 mb-0">{education.titleOfStudy}</p>
          <p className="h6 mb-0">{education.startDate}</p>
          <p className="h6 mb-2">{education.schoolName}</p>
        </div>
        <div>
          <p className="h3 text-primary shadow p-3 mb-5 bg-body rounded">Experience</p>
          <p className="h6 mb-0">{experience.jobTitle}</p>
          <p className="h6 mb-0">{experience.companyName}</p>
          <p>{experience.duties}</p>
        </div>
      </div>
    </div>

  );
};

export default Overview;
