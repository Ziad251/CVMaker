import React, { useState } from 'react';

const GInfo = (props) => {

    const [state, setState] = useState({
        info: {
            name: "",
            email: "",
            phone: "",
        }
    });


    const handleNameChange = (e) => {
        setState({
            info: {
                name: e.target.value,
                email: state.info.email,
                phone: state.info.phone,

            }
        });
    };

    const handleEmailChange = (e) => {
        setState({
            info: {
                email: e.target.value,
                name: state.info.name,
                hone: state.info.phone,

            }
        });
    };
    const handlePhoneChange = (e) => {
        setState({
            info: {
                phone: e.target.value,
                name: state.info.name,
                email: state.info.email,
            }
        });
    };
    const onSubmitTask = (e) => {
        e.preventDefault();
        props.updateInfo(state.info);
    }


    const { info } = state;

    return (
            <div className="row g-3">
                <div className=" form-floating col-md-6">
                    <input onChange={handleNameChange}
                        value={info.name}
                        type="text"
                        id="nameInput"
                        className="form-control">
                    </input>
                    <label htmlFor="nameInput">Name</label>
                </div>
                <div className="form-floating col-md-6">
                    <input onChange={handleEmailChange}
                        value={info.email}
                        type="email"
                        id="emailInput"
                        className="form-control">
                    </input>
                    <label htmlFor="emailInput">Email</label>
                </div >
                    <div className="form-floating col-mb-3">
                        <input onChange={handlePhoneChange}
                            value={info.phone}
                            type="tel"
                            id="phoneInput"
                            className="form-control">
                        </input>
                        <label htmlFor="phoneInput">Phone</label>
                    </div >
    <div className="d-grid gap-2">
        <button onClick={onSubmitTask}>Save</button>
    </div>
            </div >
        )   

}

export default GInfo;
