import React, { Component } from 'react';
import uniqid from "uniqid";

class GInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: {
                id: uniqid(),
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
                id: this.state.info.id,

            }
        });
    };

    handleEmailChange = (e) => {
        this.setState({
            info: {
                email: e.target.value,
                name: this.state.info.name,
                hone: this.state.info.phone,
                id: this.state.info.id,

            }
        });
    };
    handlePhoneChange = (e) => {
        this.setState({
            info: {
                phone: e.target.value,
                name: this.state.info.name,
                email: this.state.info.email,
                id: this.state.info.id,
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
            <div>
                <label>Name</label>
                <input onChange={this.handleNameChange}
                    value={info.name}
                    type="text"
                    id="nameInput">
                </input>
                <label>Email</label>
                <input onChange={this.handleEmailChange}
                    value={info.email}
                    type="text"
                    id="emailInput">
                </input>
                <label>Phone</label>
                <input onChange={this.handlePhoneChange}
                    value={info.phone}
                    type="text"
                    id="phoneInput">
                </input>
                <button  onClick={this.onSubmitTask}>Save</button>
            </div>
        )

    }

}

export default GInfo;
