import React, { Component } from "react";
import User from "./User";

class Users extends Component {
    render() {
        let usersList;
        const { users } = this.props;
        if (users && users !== []) {
            usersList = users.map(user => {
                return (
                    <User
                        key={user.id}
                        user={user}
                        users={users}
                        deleteUser={this.props.deleteUser}
                        updateUser={this.props.updateUser}
                    />
                );
            });
        } else {
            return null;
        }
        return <ul style={{ listStyleType: "none" }}>{usersList}</ul>;
    }
}

export default Users;