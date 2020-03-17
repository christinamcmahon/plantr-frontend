import React, { Component } from "react";
import Signup from "../components/users/Signup";
import Users from "../components/users/Users";
import { connect } from "react-redux";

class UsersContainer extends Component {
    render() {
        return (
            <div>
                <Signup addUser={this.props.addUser} />
                <Users
                    users={this.props.users}
                    deleteUser={this.props.deleteUser}
                    updateUser={this.props.updateUser}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    users: state.users
});

const mapDispatchToProps = dispatch => ({
    addUser: user => dispatch({ type: "ADD_USER", user }),
    deleteUser: id => dispatch({ type: "DELETE_USER", id }),
    updateUser: user =>
        dispatch({ type: "UPDATE_USER", user })
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UsersContainer);