import React, { Component } from "react";
import PlantInput from "../components/plants/PlantInput.js";
import Plants from "../components/plants/Plants";
import { connect } from "react-redux";

class PlantsContainer extends Component {
    render() {
        console.log('INSIDE PLANTS CONTAINER props', this.props)
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
    plants: state.plantsReducer.plants
});

const mapDispatchToProps = dispatch => ({
    addPlant: plant => dispatch({ type: "ADD_PLANT", payload: plant }),
    deletePlant: id => dispatch({ type: "DELETE_PLANT", id }),
    updatePlant: plant => dispatch({ type: "UPDATE_PLANT", payload: plant })
});

// export default withAuth(connect(mapStateToProps, mapDispatchToProps)(PlantsContainer)); // would like to add this back so users are redirected to login if not logged in already
export default connect(mapStateToProps, mapDispatchToProps)(PlantsContainer);