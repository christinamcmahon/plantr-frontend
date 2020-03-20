import React, { Component } from "react";
import { updatePlant, deletePlant } from '../../actions/plant'
import { connect } from 'react-redux'

class Plant extends Component {
    state = {
        name: this.props.plantProps.name,
        notes: this.props.plantProps.notes,
        water_frequency: this.props.plantProps.water_frequency,
        image_url: this.props.plantProps.image_url,
        editMode: false
    };

    handleDeleteClick = e => {
        e.preventDefault();
        this.props.deletePlant(this.props.plantProps.id);
    };

    handleEditClick = () => {
        this.setState({ editMode: true })
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
        const updatedPlant = this.props.updatePlant({
            name: this.state.name,
            notes: this.state.notes,
            water_frequency: this.state.water_frequency,
            image_url: this.state.image_url,
            id: this.props.plantProps.id
        });
        if (updatedPlant !== this.state && updatedPlant) {
            this.setState({
                editMode: false,
                name: updatedPlant.name,
                notes: updatedPlant.notes,
                water_frequency: updatedPlant.water_frequency,
                image_url: updatedPlant.image_url,
            })
        } else {
            this.setState({
                editMode: false
            })
        }

    };

    render() {
        const { plantProps } = this.props;

        return (
            <div>
                <li>{plantProps.name}</li>
                <p>{plantProps.notes}</p>
                <p>{plantProps.water_frequency}</p>
                <img src={plantProps.image_url} alt="plant" width="200" height="200" />
                <button onClick={this.handleEditClick} data-id={plantProps.id}>{" "}Edit{" "}</button>
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

const mapDispatchToProps = dispatch => {
    return {
        updatePlant: (plant) => updatePlant(plant)(dispatch),
        deletePlant: (id) => deletePlant(id)(dispatch)
    }
}

export default connect(null, mapDispatchToProps)(Plant);