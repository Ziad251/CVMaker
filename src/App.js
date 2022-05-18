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
      task: { text: '', id: uniqid() },
      tasks: [],
      info: '',
      education: '',
      experience: '',
    };
  }

  updateInfo = (data) => {
    console.log(data);
    this.setState({
      info: data
    });
  }
  updateEducation = (data) => {
    console.log(data);
    this.setState({
      education: data
    });
  }
  updateExperience = (data) => {
    console.log(data);
    this.setState({
      experience: data
    });
  }
  handleChange = (e) => {
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id,

      }
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: { 
        text: '',
        id: uniqid(),
      },
    });
  };

  render() {
    const { task, tasks, info, experience, education } = this.state;

    return (
      <div>
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor="taskInput">Enter task</label>
          <input
            onChange={this.handleChange}
            value={task.text}
            type="text"
            id="taskInput"
          />
          <button type="submit">
            Add Task
          </button>
           {/* Passing the updateInfo function 
           in child as a prop */}
          <GInfo updateInfo = {this.updateInfo} />
          <Education updateEducation = {this.updateEducation} />
          <Experience updateExperience = {this.updateExperience} />
        </form>
        <Overview tasks={tasks} info={info} education={education} experience={experience}/>
      </div>
    );
  }
}

export default App;
