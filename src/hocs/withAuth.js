import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
// import * as actions from '../actions'
import { fetchCurrentUser } from '../actions/user'

const withAuth = (WrappedComponent) => {
    class AuthorizedComponent extends React.Component {
        componentDidMount() {
            console.log('%c INSIDE COMPONENT DID MOUNT FOR AUTH HOC', 'color: purple')
            // POTENTIAL SECURITY FLAW!!! my tokens don't expire
            if (localStorage.getItem('jwt') && !this.props.loggedIn) this.props.fetchCurrentUser()
        }

        render() {
            console.log('%c INSIDE RENDER FOR HOC', 'color: green')
            if (localStorage.getItem('jwt') && this.props.loggedIn) {
                return <WrappedComponent /> // plants main page
            } else if (localStorage.getItem('jwt') && (this.props.authenticatingUser || !this.props.loggedIn)) {
                return <div>Loading...</div>
            } else {
                //user is not AUTHORIZED to see this component
                return <Redirect to="/login" />
            }
        }
    }

    const mapStateToProps = (state) => {
        return {
            loggedIn: state.loggedIn,
            authenticatingUser: state.authenticatingUser
        }
    }
    return connect(mapStateToProps, { fetchCurrentUser })(AuthorizedComponent)
}

export default withAuth