import React, { Component } from 'react';

class GInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: {
                name: "",
                email: "",
                phone: "",
            }
        };
    }

    handleNameChange = (e) => {
        this.setState({
            info: {
                name: e.target.value,
                email: this.state.info.email,
                phone: this.state.info.phone,

            }
        });
    };

    handleEmailChange = (e) => {
        this.setState({
            info: {
                email: e.target.value,
                name: this.state.info.name,
                hone: this.state.info.phone,

            }
        });
    };
    handlePhoneChange = (e) => {
        this.setState({
            info: {
                phone: e.target.value,
                name: this.state.info.name,
                email: this.state.info.email,
            }
        });
    };
    onSubmitTask = (e) => {
        e.preventDefault();
        this.props.updateInfo(this.state.info);
    }

    render() {
        const { info } = this.state;

        return (
            <div className="row g-3">
                <div className=" form-floating col-md-6">
                    <input onChange={this.handleNameChange}
                        value={info.name}
                        type="text"
                        id="nameInput"
                        className="form-control">
                    </input>
                    <label htmlFor="nameInput">Name</label>
                </div>
                <div className="form-floating col-md-6">
                    <input onChange={this.handleEmailChange}
                        value={info.email}
                        type="email"
                        id="emailInput"
                        className="form-control">
                    </input>
                    <label htmlFor="emailInput">Email</label>
                </div>
                    <div className="form-floating col-mb-3">
                        <input onChange={this.handlePhoneChange}
                            value={info.phone}
                            type="tel"
                            id="phoneInput"
                            className="form-control">
                        </input>
                        <label htmlFor="phoneInput">Phone</label>
                    </div>
                <div className="d-grid gap-2">
                    <button onClick={this.onSubmitTask}>Save</button>
                </div>
            </div>
        )

    }

}

export default GInfo;
