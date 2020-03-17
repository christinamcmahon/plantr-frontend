import React, { Component } from "react";

class Signup extends Component {
    state = {
        name: "",
        username: "",
        avatar_url: "",
        email: "",
        notification: false
    };

    handleOnSubmit = e => {
        e.preventDefault();
        this.props.addUser({
            name: this.state.name,
            username: this.state.username,
            avatar_url: this.state.avatar_url,
            email: this.state.email,
            notification: this.state.notification
        });
        this.setState({
            name: "",
            username: "",
            avatar_url: "",
            email: "",
            notification: false
        });
    };

    handleOnChangeName = e => {
        this.setState({ name: e.target.value });
    };

    handleOnChangeUsername = e => {
        this.setState({ username: e.target.value });
    };

    handleOnChangeAvatarUrl = e => {
        this.setState({ avatar_url: e.target.value });
    };

    handleOnChangeEmail = e => {
        this.setState({ email: e.target.value });
    };

    handleOnChangeNotification = () => {
        const toggledValue = !this.state.notification
        this.setState({ notification: toggledValue });
    };

    render() {
        console.log(this.state)
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <label>Full Name: </label>
                    <input
                        type="text"
                        value={this.state.name}
                        onChange={this.handleOnChangeName}
                    />
                    <br />
                    <label>Username: </label>
                    <input
                        type="text"
                        value={this.state.username}
                        onChange={this.handleOnChangeUsername}
                    />
                    <br />
                    <label>Profile Picture: </label>
                    <input
                        type="text"
                        value={this.state.avatar_url}
                        onChange={this.handleOnChangeAvatarUrl}
                    />
                    <br />
                    <label>Email: </label>
                    <input
                        type="text"
                        value={this.state.email}
                        onChange={this.handleOnChangeEmail}
                    />
                    <br />
                    <label>Email Notifications: </label>
                    <input
                        type="checkbox"
                        value="true"
                        onChange={this.handleOnChangeNotification}
                    />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default Signup;