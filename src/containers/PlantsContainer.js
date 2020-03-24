import React, { Component } from "react";
import PlantInput from "../components/plants/PlantInput.js";
import Plants from "../components/plants/Plants";
import { connect } from "react-redux";
import { api } from "../services/api"

class PlantsContainer extends Component {
    state = {
        authorized: false
    }

    componentDidMount() {
        // console.log("COMPONENT DID MOUNT", this.props.fetchPlants)
        if (localStorage.getItem("jwt")) {
            api.auth.getCurrentUser().then((data) => {
                if (!data.error) {
                    this.setState({
                        authorized: true
                    })
                } else {
                    console.log("Bad Token")
                    this.props.history.push("/login")
                }
            })
        } else {
            console.log("no token")
            this.props.history.push("/login")
        }
    }

    render() {
        console.log('INSIDE PLANTS CONTAINER props', this.props)
        return (
            <div>
                {/* TODO: plant form will render if the user presses the add plant button */}
                {this.state.authorized ? (
                    <>
                        <PlantInput addPlant={this.props.addPlant} />
                        <Plants
                            plants={this.props.plants}
                            deletePlant={this.props.deletePlant}
                            updatePlant={this.props.updatePlant}
                        />
                    </>
                ) : null}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    plants: state.plantsReducer.plants,
    currentUser: state.usersReducer.user
});

const mapDispatchToProps = dispatch => ({
    addPlant: plant => dispatch({ type: "ADD_PLANT", payload: plant }),
    deletePlant: id => dispatch({ type: "DELETE_PLANT", id }),
    updatePlant: plant => dispatch({ type: "UPDATE_PLANT", payload: plant }),
    fetchPlants: (user) => dispatch({ type: "FETCH_PLANTS", payload: user })
});

export default connect(mapStateToProps, mapDispatchToProps)(PlantsContainer);