import React, { Component } from "react";
import Plant from "./Plant";
import { Grid } from "@material-ui/core"

class Plants extends Component {
    render() {
        console.log("INSIDE Plants.js", this.props)
        let plantsList;
        const { plants } = this.props;
        if (plants && plants !== []) {
            plantsList = plants.map(plantInstance => {
                // console.log('INSIDE PLANTS plants', plants)
                console.log("INSIDE PLANTS plant", plantInstance)
                return (
                    <Grid item xs={12} sm={6}>
                        <Plant
                            key={plantInstance.id}
                            plantProps={plantInstance}
                            deletePlant={this.props.deletePlant}
                            updatePlant={this.props.updatePlant}
                        />
                    </Grid>
                );
            });
        } else {
            return null;
        }
        return (
            <Grid container spacing={2} style={{ marginTop: '10vh' }}>
                {plantsList}
            </Grid>
        )
    }
}

export default Plants;