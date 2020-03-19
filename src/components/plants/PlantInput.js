import React, { Component } from "react";
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { addPlant } from '../../actions/plant'

class PlantInput extends Component {
    state = {
        name: "",
        notes: "",
        water_frequency: "",
        image_url: "https://png.pngtree.com/element_our/png_detail/20181229/sprout-plant-graphic-icon-design-template-png_301529.jpg"
    };

    handleOnSubmit = e => {
        e.preventDefault();
        console.log('Props in PlantForm:', this.props)
        this.props.addPlant({
            name: this.state.name,
            notes: this.state.notes,
            water_frequency: this.state.water_frequency,
            image_url: this.state.image_url
        });
        this.setState({
            name: "",
            notes: "",
            water_frequency: "",
            image_url: "https://png.pngtree.com/element_our/png_detail/20181229/sprout-plant-graphic-icon-design-template-png_301529.jpg"
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

    render() {
        console.log("PLANT INPUT PROPS: ", this.props)
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
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
        );
    }
}

const mapStateToProps = state => {
    return {
        plants: state.plantsReducer.plants
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addPlant: (plant) => addPlant(plant)(dispatch)
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PlantInput));