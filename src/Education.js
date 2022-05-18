import React, { Component } from 'react';
import uniqid from "uniqid";

class Education extends Component {
    constructor(props) {
        super(props);
        this.state = {
            education: {
                id: uniqid(),
                schoolName: "",
                titleOfStudy: "",
                startDate: "",
            }
        };
    }

    handleschoolNameChange = (e) => {
        this.setState({
            education: {
                schoolName: e.target.value,
                titleOfStudy: this.state.education.titleOfStudy,
                startDate: this.state.education.startDate,
                id: this.state.education.id,

            }
        });
    };

    handletitleOfStudyChange = (e) => {
        this.setState({
            education: {
                titleOfStudy: e.target.value,
                schoolName: this.state.education.schoolName,
                hone: this.state.education.startDate,
                id: this.state.education.id,

            }
        });
    };
    handlestartDateChange = (e) => {
        this.setState({
            education: {
                startDate: e.target.value,
                schoolName: this.state.education.schoolName,
                titleOfStudy: this.state.education.titleOfStudy,
                id: this.state.education.id,
            }
        });
    };
    onSubmitTask = (e) => {
        e.preventDefault();
        this.props.updateEducation(this.state.education);
    }

    render() {
        const { education } = this.state;

        return (
            <div>

                <label>schoolName</label>
                <input onChange={this.handleschoolNameChange}
                    value={education.schoolName}
                    type="text"
                    id="schoolNameInput">
                </input>
                <label>titleOfStudy</label>
                <input onChange={this.handletitleOfStudyChange}
                    value={education.titleOfStudy}
                    type="text"
                    id="titleOfStudyInput">
                </input>
                <label>startDate</label>
                <input onChange={this.handlestartDateChange}
                    value={education.startDate}
                    type="text"
                    id="startDateInput">
                </input>
                <button  onClick={this.onSubmitTask}>Save</button>
            </div>
        )

    }

}

export default Education;
