import React, { Component } from 'react';
import uniqid from "uniqid";

class Experience extends Component {
    constructor(props) {
        super(props);
        this.state = {
            experience: {
                id: uniqid(),
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
                id: this.state.experience.id,

            }
        });
    };

    handlejobTitleChange = (e) => {
        this.setState({
            experience: {
                jobTitle: e.target.value,
                companyName: this.state.experience.companyName,
                hone: this.state.experience.duties,
                id: this.state.experience.id,

            }
        });
    };
    handledutiesChange = (e) => {
        this.setState({
            experience: {
                duties: e.target.value,
                companyName: this.state.experience.companyName,
                jobTitle: this.state.experience.jobTitle,
                id: this.state.experience.id,
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
            <div>

                <label>companyName</label>
                <input onChange={this.handlecompanyNameChange}
                    value={experience.companyName}
                    type="text"
                    id="companyNameInput">
                </input>
                <label>jobTitle</label>
                <input onChange={this.handlejobTitleChange}
                    value={experience.jobTitle}
                    type="text"
                    id="jobTitleInput">
                </input>
                <label>duties</label>
                <input onChange={this.handledutiesChange}
                    value={experience.duties}
                    type="text"
                    id="dutiesInput">
                </input>
                <button  onClick={this.onSubmitTask}>Save</button>
            </div>
        )

    }

}

export default Experience;
