import React, { Component } from "react";
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router'
import { signUpUser } from '../../actions/user'

class Signup extends Component {
    state = {
        name: "",
        username: "",
        password: "",
        avatar_url: "https://thepowerofthedream.org/wp-content/uploads/2015/09/generic-profile-picture.jpg",
        email: "",
        notification: false
    };

    handleOnSubmit = e => {
        e.preventDefault();
        this.props.signUpUser({
            name: this.state.name,
            username: this.state.username,
            password: this.state.password,
            avatar_url: this.state.avatar_url,
            email: this.state.email,
            notification: this.state.notification
        });
        this.setState({
            name: "",
            username: "",
            password: "",
            avatar_url: "https://thepowerofthedream.org/wp-content/uploads/2015/09/generic-profile-picture.jpg",
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

    handleOnChangePassword = e => {
        this.setState({ password: e.target.value });
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
        console.log("SIGNUP FORM PROPS: ", this.props)
        return this.props.loggedIn ? (
            <Redirect to="/plants" />
        ) : (
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
                        <label>Password: </label>
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.handleOnChangePassword}
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

const mapStateToProps = (state) => {
    console.log('Signup.js state: ', state)
    return {
        authenticatingUser: state.usersReducer.authenticatingUser,
        failedLogin: state.usersReducer.failedLogin,
        error: state.usersReducer.error,
        loggedIn: state.usersReducer.loggedIn
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signUpUser: (user) => signUpUser(user)(dispatch)
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Signup));
// export default Signup;