import React, { Component } from "react";
import PlantInput from "../components/plants/PlantInput.js";
import Plants from "../components/plants/Plants";
import { connect } from "react-redux";
import withAuth from '../hocs/withAuth'

class PlantsContainer extends Component {
    render() {
        return (
            <div>
                {/* TODO: plant form will render if the user presses the add plant button */}
                <PlantInput addPlant={this.props.addPlant} />
                <Plants
                    plants={this.props.plants}
                    deletePlant={this.props.deletePlant}
                    updatePlant={this.props.updatePlant}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    plants: state.plants
});

const mapDispatchToProps = dispatch => ({
    addPlant: plant => dispatch({ type: "ADD_PLANT", plant }),
    deletePlant: id => dispatch({ type: "DELETE_PLANT", id }),
    updatePlant: plant =>
        dispatch({ type: "UPDATE_PLANT", plant })
});

export default withAuth(connect(mapStateToProps, mapDispatchToProps)(PlantsContainer));