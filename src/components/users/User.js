import React, { Component } from "react";

class User extends Component {
    state = {
        name: "",
        username: "",
        avatar_url: "",
        email: "",
        notification: false,
        editMode: false
    };

    handleDeleteClick = e => {
        e.preventDefault();
        this.props.deleteUser(this.props.user.id);
    };

    handleEditClick = e => {
        e.preventDefault();
        const user = this.props.users.find(
            user => user.id === e.target.dataset.id
        );
        this.setState({
            name: user.name,
            username: user.username,
            avatar_url: user.avatar_url,
            image_url: user.image_url,
            email: user.email,
            notification: false,
            editMode: true
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

    handleOnChangeNotification = e => {
        console.log("e:", e)
        console.log("!e:", !e)
        this.setState({ notification: !e });
    };

    handleOnSubmit = e => {
        e.preventDefault();
        this.props.updateUser({
            name: this.state.name,
            username: this.state.username,
            avatar_url: this.state.avatar_url,
            image_url: this.state.image_url,
            notification: this.state.notification,
            id: this.props.user.id
        });
        this.setState({
            editMode: false,
            name: "",
            username: "",
            avatar_url: "",
            image_url: "",
            notification: false
        });
    };

    render() {
        const { user } = this.props;
        console.log(user)
        return (
            <div>
                <li>{user.name}</li>
                <p>{user.username}</p>
                <p>{user.avatar_url}</p>
                <img src={user.avatar_url} alt="user profile" />
                <p>{user.email}</p>
                <p>Notification: {user.notification}</p>
                <button onClick={this.handleEditClick} data-id={user.id}>{" "}Edit{" "}</button>
                <button onClick={this.handleDeleteClick}> Delete </button>
                {this.state.editMode ? (
                    <div>
                        <form onSubmit={this.handleOnSubmit}>
                            <label>Edit User info: </label>
                            <br />
                            <label>Full Name: </label>
                            <input
                                type="text"
                                value={this.state.name}
                                onChange={this.handleOnChangeName}
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
                                value={this.state.notification}
                                onChange={this.handleOnChangeNotification}
                            />
                            <br />
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                ) : null}
            </div>
        );
    }
}

export default User;