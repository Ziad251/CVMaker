import React, { useState } from 'react';

const Education = (props) => {
    const [state, setState] = useState({
        education: {
            schoolName: "",
            titleOfStudy: "",
            startDate: "",
        }
    });


    const handleschoolNameChange = (e) => {
        setState({
            education: {
                schoolName: e.target.value,
                titleOfStudy: state.education.titleOfStudy,
                startDate: state.education.startDate,

            }
        });
    };

    const handletitleOfStudyChange = (e) => {
        setState({
            education: {
                titleOfStudy: e.target.value,
                schoolName: state.education.schoolName,
                startDate: state.education.startDate,

            }
        });
    };
    const handlestartDateChange = (e) => {
        setState({
            education: {
                startDate: e.target.value,
                schoolName: state.education.schoolName,
                titleOfStudy: state.education.titleOfStudy,
            }
        });
    };
    const onSubmitTask = (e) => {
        e.preventDefault();
        props.updateEducation(state.education);
    }


    const { education } = state;

    return (
        <div className="row g-3">
            <div className="form-floating col-md-6">
                <input onChange={handleschoolNameChange}
                    value={education.schoolName}
                    type="text"
                    id="schoolNameInput"
                    className="form-control">
                </input>
                <label htmlFor="schoolNameInput">School Name</label>
            </div>
            <div className="form-floating col-md-6">
                <input onChange={handletitleOfStudyChange}
                    value={education.titleOfStudy}
                    type="text"
                    id="titleOfStudyInput"
                    className="form-control">
                </input>
                <label htmlFor="titleOfStudyInput">Title Of Study</label>
            </div>
            <div className="form-floating col mb-3">
                <input onChange={handlestartDateChange}
                    value={education.startDate}
                    type="date"
                    id="startDateInput"
                    className="form-control">
                </input>
                <label htmlFor="startDateInput">Start Date</label>
            </div>
            <div className="d-grid gap-2">
                <button onClick={onSubmitTask}>Save</button>
            </div>
        </div>
    )

}

export default Education;
