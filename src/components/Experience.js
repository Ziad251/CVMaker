import React, { useState } from 'react';

const Experience = (props) => {

    const [state, setState] = useState(
        {
            experience: {
                companyName: "",
                jobTitle: "",
                duties: ""
            }
        });


    const handlecompanyNameChange = (e) => {
        setState({
            experience: {
                companyName: e.target.value,
                jobTitle: state.experience.jobTitle,
                duties: state.experience.duties,
            }
        });
    };

    const handlejobTitleChange = (e) => {
        setState({
            experience: {
                jobTitle: e.target.value,
                companyName: state.experience.companyName,
                hone: state.experience.duties,
            }
        });
    };
    const handledutiesChange = (e) => {
        setState({
            experience: {
                duties: e.target.value,
                companyName: state.experience.companyName,
                jobTitle: state.experience.jobTitle,
            }
        });
    };
    const onSubmitTask = (e) => {
        e.preventDefault();
        props.updateExperience(state.experience);
    }


    const { experience } = state;

    return (
        <div className="row g-3">
            <div className=" form-floating col-md-6">
                <input onChange={handlecompanyNameChange}
                    value={experience.companyName}
                    type="text"
                    id="companyNameInput"
                    className="form-control">
                </input>
                <label htmlFor="companyNameInput">Company Name</label>
            </div>
            <div className="form-floating col-md-6">
                <input onChange={handlejobTitleChange}
                    value={experience.jobTitle}
                    type="text"
                    id="jobTitleInput"
                    className="form-control">
                </input>
                <label htmlFor="jobTitleInput">Job Title</label>
            </div>
            <div className="form-floating col-md-6">
                <input onChange={handledutiesChange}
                    value={experience.duties}
                    type="text"
                    id="dutiesInput"
                    className="form-control">
                </input>
                <label htmlFor="dutiesInput">Duties</label>
            </div>
            <div className="d-grid gap-2">
                <button onClick={onSubmitTask}>Save</button>
            </div>
        </div>
    )



}



export default Experience;
