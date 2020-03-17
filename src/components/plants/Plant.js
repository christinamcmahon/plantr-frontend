import React, { Component } from "react";

class Plant extends Component {
    state = {
        name: "",
        notes: "",
        water_frequency: "",
        image_url: "",
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
        this.setState({
            name: plant.name,
            notes: plant.notes,
            water_frequency: plant.water_frequency,
            image_url: plant.image_url,
            editMode: true
        });
    };

    handleOnChangeName = e => {
        this.setState({ name: e.target.value });
    };

    handleOnChangeNotes = e => {
        this.setState({ notes: e.target.value });
    };

    handleOnChangeWaterFrequency = e => {
        this.setState({ water_frequency: e.target.value });
    };

    handleOnChangeImageUrl = e => {
        this.setState({ image_url: e.target.value });
    };

    handleOnSubmit = e => {
        e.preventDefault();
        this.props.updatePlant({
            name: this.state.name,
            notes: this.state.notes,
            water_frequency: this.state.water_frequency,
            image_url: this.state.image_url,
            id: this.props.plant.id
        });
        this.setState({
            editMode: false,
            name: "",
            notes: "",
            water_frequency: "",
            image_url: "",
        });
    };

    render() {
        const { plant } = this.props;

        return (
            <div>
                <li>{plant.name}</li>
                <p>{plant.notes}</p>
                <p>{plant.water_frequency}</p>
                <img src={plant.image_url} alt="plant" />
                <button onClick={this.handleEditClick} data-id={plant.id}>{" "}Edit{" "}</button>
                <button onClick={this.handleDeleteClick}> Delete </button>
                {this.state.editMode ? (
                    <div>
                        <form onSubmit={this.handleOnSubmit}>
                            <label>Edit Plant: </label>
                            <br />
                            <label>Name: </label>
                            <input
                                type="text"
                                value={this.state.name}
                                onChange={this.handleOnChangeName}
                            />
                            <br />
                            <label>Notes: </label>
                            <input
                                type="text"
                                value={this.state.notes}
                                onChange={this.handleOnChangeNotes}
                            />
                            <br />
                            <label>Water Frequency: </label>
                            <input
                                type="number"
                                value={this.state.water_frequency}
                                onChange={this.handleOnChangeWaterFrequency}
                            />
                            <br />
                            <label>Image: </label>
                            <input
                                type="text"
                                alt="not available"
                                value={this.state.image_url}
                                onChange={this.handleOnChangeImageUrl}
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

export default Plant;