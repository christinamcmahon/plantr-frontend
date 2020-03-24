import React, { Component } from "react";
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router'
import { signUpUser } from '../../actions/user'
import TextField from '@material-ui/core/TextField'
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';

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
        // console.log("HANDLING REGISTER SUBMIT")
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
                <Grid container justify="center" style={{ marginTop: '10vh', marginBottom: '10vh', backgroundColor: 'white', padding: '6vh', borderRadius: '10px' }} >
                    <Typography component="h1" variant="h5">
                        Register
                </Typography>
                    <form onSubmit={this.handleSubmit}>
                        <TextField margin="normal" required fullWidth label="Full Name" onChange={this.handleOnChangeName} />
                        <TextField margin="normal" required fullWidth label="Username" onChange={this.handleOnChangeUsername} />
                        <TextField margin="normal" required fullWidth label="Password" type="password" onChange={this.handleOnChangePassword} />
                        <input type="file" display="none" id="upload-avatar" style={{ display: "none" }} />
                        <label htmlFor="upload-avatar">
                            <Button variant="outlined" color="primary" component="span">
                                Upload Avatar
                        </Button>
                        </label>
                        <TextField margin="normal" required fullWidth label="Email" onChange={this.handleOnChangeEmail} type="email" />
                        <label htmlFor="notification-checkbox">
                            Notifcations
                    </label>
                        <Checkbox id="notification-checkbox" defaultChecked onChange={this.handleOnChangeNotification} defaultValue="true" />
                        <Button type="submit" fullWidth variant="contained" color="primary" onClick={this.handleOnSubmit}>
                            Sign Up
                    </Button>
                    </form>
                </Grid>
            );
    }
}

const mapStateToProps = (state) => {
    return {
        loggedIn: state.usersReducer.loggedIn
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signUpUser: (user) => signUpUser(user)(dispatch)
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Signup));