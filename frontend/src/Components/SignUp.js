import React, { Component } from 'react';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
        }
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({ username: event.target.value });
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.onSubmit(this.state.username);
    }
    render() {
        return(
            <div className="form-container">
                <h1>Say Hello</h1>
                <form onSubmit={this.handleSubmit} className="form">
                    <label htmlFor="email">Please enter your email?</label>
                    <input type="email" name="username" onChange={this.handleChange} className="input"/>
                    <button className="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default SignUp;