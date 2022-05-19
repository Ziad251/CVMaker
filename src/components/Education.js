import React, { Component } from 'react';

class Education extends Component {
    constructor(props) {
        super(props);
        this.state = {
            education: {
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

            }
        });
    };

    handletitleOfStudyChange = (e) => {
        this.setState({
            education: {
                titleOfStudy: e.target.value,
                schoolName: this.state.education.schoolName,
                startDate: this.state.education.startDate,

            }
        });
    };
    handlestartDateChange = (e) => {
        this.setState({
            education: {
                startDate: e.target.value,
                schoolName: this.state.education.schoolName,
                titleOfStudy: this.state.education.titleOfStudy,
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
            <div className="row g-3">
                <div className="form-floating col-md-6">
                    <input onChange={this.handleschoolNameChange}
                        value={education.schoolName}
                        type="text"
                        id="schoolNameInput"
                        className="form-control">
                    </input>
                    <label htmlFor="schoolNameInput">School Name</label>
                </div>
                <div className="form-floating col-md-6">
                    <input onChange={this.handletitleOfStudyChange}
                        value={education.titleOfStudy}
                        type="text"
                        id="titleOfStudyInput"
                        className="form-control">
                    </input>
                    <label htmlFor="titleOfStudyInput">Title Of Study</label>
                </div>
                <div className="form-floating col mb-3">
                    <input onChange={this.handlestartDateChange}
                        value={education.startDate}
                        type="date"
                        id="startDateInput"
                        className="form-control">
                    </input>
                    <label htmlFor="startDateInput">Start Date</label>
                </div>
                <div className="d-grid gap-2">
                    <button onClick={this.onSubmitTask}>Save</button>
                </div>
            </div>
        )

    }

}

export default Education;
