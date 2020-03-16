import React, { Component } from "react";

class Plant extends Component {
    state = {
        name: "",
        editMode: false
    };

    handleDeleteClick = e => {
        e.preventDefault();
        this.props.deletePlant(this.props.plant.id);
    };

    handleEditClick = e => {
        e.preventDefault();
        const plant = this.props.plants.find(
            plant => plant.id === e.target.dataset.id
        );
        this.setState({ name: plant.name, editMode: true });
    };

    handleOnChange = e => {
        this.setState({ name: e.target.value });
    };

    handleOnSubmit = e => {
        e.preventDefault();
        this.props.updatePlant({
            name: this.state.name,
            id: this.props.plant.id
        });
        this.setState({ editMode: false, name: "" });
    };

    render() {
        const { plant } = this.props;

        return (
            <div>
                <li>{plant.name}</li>
                <button onClick={this.handleEditClick} data-id={plant.id}>
                    {" "}
          Edit{" "}
                </button>
                <button onClick={this.handleDeleteClick}> Delete </button>
                {this.state.editMode ? (
                    <div>
                        <form onSubmit={this.handleOnSubmit}>
                            <label htmlFor="the-submit">Edit: </label>
                            <input
                                id="the-submit"
                                type="name"
                                value={this.state.name}
                                onChange={this.handleOnChange}
                            />
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                ) : null}
            </div>
        );
    }
}

export default Plant;