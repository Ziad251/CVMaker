import React, { Component } from 'react';

class Experience extends Component {
    constructor(props) {
        super(props);
        this.state = {
            experience: {
                companyName: "",
                jobTitle: "",
                duties: "",
            }
        };
    }

    handlecompanyNameChange = (e) => {
        this.setState({
            experience: {
                companyName: e.target.value,
                jobTitle: this.state.experience.jobTitle,
                duties: this.state.experience.duties,
                

            }
        });
    };

    handlejobTitleChange = (e) => {
        this.setState({
            experience: {
                jobTitle: e.target.value,
                companyName: this.state.experience.companyName,
                hone: this.state.experience.duties,
                

            }
        });
    };
    handledutiesChange = (e) => {
        this.setState({
            experience: {
                duties: e.target.value,
                companyName: this.state.experience.companyName,
                jobTitle: this.state.experience.jobTitle,
                
            }
        });
    };
    onSubmitTask = (e) => {
        e.preventDefault();
        this.props.updateExperience(this.state.experience);
    }

    render() {
        const { experience } = this.state;

        return (
            <div className="row g-3">
                <div className=" form-floating col-md-6">
                    <input onChange={this.handlecompanyNameChange}
                        value={experience.companyName}
                        type="text"
                        id="companyNameInput"
                        className="form-control">
                    </input>
                    <label htmlFor="companyNameInput">Company Name</label>
                </div>
                <div className="form-floating col-md-6">
                    <input onChange={this.handlejobTitleChange}
                        value={experience.jobTitle}
                        type="text"
                        id="jobTitleInput"
                        className="form-control">
                    </input>
                    <label htmlFor="jobTitleInput">Job Title</label>
                </div>
                <div className="form-floating col-md-6">
                    <input onChange={this.handledutiesChange}
                        value={experience.duties}
                        type="text"
                        id="dutiesInput"
                        className="form-control">
                    </input>
                    <label htmlFor="dutiesInput">Duties</label>
                </div>
                <div className="d-grid gap-2">
                    <button onClick={this.onSubmitTask}>Save</button>
                </div>
            </div>
        )

    }

}



export default Experience;
