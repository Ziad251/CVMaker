import React, { Component } from "react";
import uniqid from "uniqid";
import Education from "./components/Education";
import Experience from "./components/Experience";
import GInfo from "./components/GInfo";
import Overview from "./components/Overview";
import {sampleInfo, sampleExperience, sampleEducation }  from "./sample";

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
      cv: {
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
        info: this.state.cv.info,
        experience: this.state.cv.experience
      }
    });
  }
  updateExperience = (data) => {
    this.setState({
      cv: {
        experience: data,
        id: this.state.cv.id,
        info: this.state.cv.info,
        education: this.state.cv.education,
      }
    });
  }

  useDemoCV = (e) => {
    e.preventDefault();
    this.setState({
      cv: {
        id: this.state.cv.id,
        info: sampleInfo,
        education: sampleEducation,
        experience: sampleExperience,
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
        <div className="row align-items-center justify-content-around">
        <div className="col-10">
          <Overview info={info} education={education} experience={experience} />
        </div>
        <div className="col-2">
        <button className="btn btn-primary" onClick={this.useDemoCV}> Demo </button>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
