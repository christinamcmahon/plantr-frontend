import React, { Component } from "react";
import Plant from "./Plant";

class Plants extends Component {
    render() {
        let plantsList;
        const { plants } = this.props;
        if (plants && plants !== []) {
            plantsList = plants.map(plantInstance => {
                console.log('INSIDE PLANTS plants', plants)
                console.log("INSIDE PLANTS plant", plantInstance)
                return (
                    <Plant
                        key={plantInstance.id}
                        plantProps={plantInstance}
                        // plants={plants}
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