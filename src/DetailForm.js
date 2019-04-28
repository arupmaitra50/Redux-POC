import React, { Component } from 'react'

export default class DetailForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            origin: "",
            continent: ""
        }
    }

    submitDtails = () => {
        console.log(this.state);
    }

    render() {
        return (
            <div>
                Name: <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    maxLength={50}
                    onChange={(e) => this.setState({ "name": e.target.value })}
                />
                <br />
                Origin: <input
                    type="text"
                    name="origin"
                    placeholder="Enter your origin"
                    maxLength={50}
                    onChange={(e) => this.setState({ "origin": e.target.value })}
                />
                <br />
                Continent: <input
                    type="text"
                    name="continent"
                    placeholder="Enter your continent"
                    maxLength={50}
                    onChange={(e) => this.setState({ "continent": e.target.value })}
                /><br />
                <button onClick={() => this.submitDtails()}>Add Detail</button>
            </div>
        )
    }
}