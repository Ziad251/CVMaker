import React from "react";

const Overview = (props) => {
  const { info, education, experience } = props;

  return (
    //   {tasks.map((task) => {
    //     return <li key={task.id}>{task.text}</li>;
    //   })}
      <ul>
      <li>{info.name}</li>
      <li>{info.email}</li>
      <li>{info.phone}</li>
      <li>{education.schoolName}</li>
      <li>{education.startDate}</li>
      <li>{education.titleOfStudy}</li>
      <li>{experience.companyName}</li>
      <li>{experience.jobTitle}</li>
      <li>{experience.duties}</li>
    </ul>
  );
};

export default Overview;
