import React, { Component } from "react";
import Plant from "./Plant";

class Plants extends Component {
    render() {
        let plantsList;
        const { plants } = this.props;
        if (plants && plants !== []) {
            plantsList = plants.map(plant => {
                return (
                    <Plant
                        key={plant.id}
                        plant={plant}
                        plants={plants}
                        deletePlant={this.props.deletePlant}
                        updatePlant={this.props.updatePlant}
                    />
                );
            });
        } else {
            return null;
        }
        return <ul style={{ listStyleType: "none" }}>{plantsList}</ul>;
    }
}

export default Plants;