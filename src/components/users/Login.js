import React from 'react';
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router'
import { loginUser } from '../../actions/user'

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
        console.log('%c INSIDE handleSubmit for login form', 'color: red')
        this.props.loginUser(this.state.username, this.state.password)
        this.setState({
            username: '',
            password: ''
        })
    };

    render() {
        console.log('%c LOGIN FORM PROPS: ', 'color: red', this.props)
        return this.props.loggedIn ? (
            <Redirect to="/plants" />
        ) : (
                <div>
                    {this.state.error ? <h1>Try again...</h1> : null}
                    <div>
                        <form onSubmit={this.handleSubmit}>
                            <label>Username: </label>
                            <input
                                type="text"
                                placeholder="username"
                                value={this.state.username}
                                onChange={this.handleOnChangeUsername}
                            />
                            <br />
                            <label>Password: </label>
                            <input
                                type="password"
                                placeholder="password"
                                value={this.state.password}
                                onChange={this.handleOnChangePassword}
                            />
                            <br />
                            <button type="submit">Login</button>
                        </form>
                    </div>
                </div>
            );
    }
}

const mapStateToProps = (state) => {
    console.log('Login.js state: ', state)
    return {
        authenticatingUser: state.usersReducer.authenticatingUser,
        failedLogin: state.usersReducer.failedLogin,
        error: state.usersReducer.error,
        loggedIn: state.usersReducer.loggedIn
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loginUser: (username, password) => loginUser(username, password)(dispatch)
    }
}

// export default withRouter(connect(mapStateToProps, { loginUser })(Login));
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));