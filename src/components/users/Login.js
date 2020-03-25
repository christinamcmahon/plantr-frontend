import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { loginUser } from '../../actions/user'
import TextField from '@material-ui/core/TextField'
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
// import { api } from '../../services/api';

class Login extends React.Component {
    state = {
        username: '',
        password: ''
    }

    handleOnChangeUsername = e => {
        this.setState({ username: e.target.value });
    };

    handleOnChangePassword = e => {
        this.setState({ password: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        // console.log("LOGGING IN")
        this.props.loginUser(this.state.username, this.state.password, () => this.props.history.push("/plants"), (user) => this.props.fetchPlants(user))
        // api.auth.login(this.state).then(res => {
        //     if (!res.message) {
        //         console.log("res....", res)
        //         localStorage.setItem("jwt", res.jwt)
        //         console.log("About to go to plants...")
        //         this.props.history.push('/plants')
        //     }
        // })
    };

    render() {
        console.log('%c LOGIN FORM PROPS: ', 'color: red', this.props.loggedIn)
        return (
            <Grid container justify="center" style={{ marginTop: '10vh', backgroundColor: 'white', padding: '6vh', borderRadius: '10px' }}>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <Typography component="h1" variant="h5" align="center">
                        Sign in
                    </Typography>
                    <TextField margin="normal" required fullWidth label="Username" onChange={this.handleOnChangeUsername} />
                    <TextField margin="normal" required fullWidth label="Password" type="password" onChange={this.handleOnChangePassword} />
                    <Button type="submit" fullWidth variant="contained"  >
                        Sign In
                        </Button>
                    <Button fullWidth variant="contained" onClick={() => { this.props.history.push('/signup') }}>
                        Register
                    </Button>
                </form>
            </Grid>
        );
        // }
    }
}

const mapStateToProps = (state) => {
    return {
        authenticatingUser: state.usersReducer.authenticatingUser,
        failedLogin: state.usersReducer.failedLogin,
        error: state.usersReducer.error,
        loggedIn: state.usersReducer.loggedIn
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loginUser: (username, password, goToPlants, fetchPlants) => loginUser(username, password, goToPlants, fetchPlants)(dispatch),
        fetchPlants: (user) => dispatch({ type: "FETCH_PLANTS", payload: user })
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));