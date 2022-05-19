import React, { Component } from "react";
import uniqid from "uniqid";
import Education from "./Education";
import Experience from "./Experience";
import GInfo from "./GInfo";
import Overview from "./Overview";

class App extends Component {
  constructor() {
    super();

    this.updateInfo.bind(this);
    this.updateExperience.bind(this);
    this.updateEducation.bind(this);

    this.state = {
      history: [],
      cv: {
        id: uniqid(),
        info: '',
        education: '',
        experience: '',
      }
    };
  }

  updateInfo = (data) => {
    this.setState({
      cv:{
        id: this.state.cv.id,
        info: data,
        education: this.state.cv.education,
        experience: this.state.cv.experience
      }
    });
  }
  updateEducation = (data) => {
    this.setState({
      cv: {
        education: data,
        id: this.state.cv.id,
        info: data,
        experience: this.state.cv.experience
      }
    });
  }
  updateExperience = (data) => {
    this.setState({
      cv: {
        experience: data,
        id: this.state.cv.id,
        info: data,
        education: this.state.cv.education,
      }
    });
  }

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      history: this.state.history.concat(this.state.cv),
      cv: {
      info: '',
      education: '',
      experience: '',
      }
    });
  };

  render() {
    const { info, experience, education } = this.state.cv;

    return (
      <div>
        <form className="row g-3" onSubmit={this.onSubmitTask}>
          <GInfo updateInfo={this.updateInfo} />
          <Education updateEducation={this.updateEducation} />
          <Experience updateExperience={this.updateExperience} />
        </form>
        <Overview info={info} education={education} experience={experience} />
      </div>
    );
  }
}

export default App;
