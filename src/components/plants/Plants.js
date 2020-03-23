import React, { Component } from "react";
import Plant from "./Plant";
import { Grid } from "@material-ui/core"
import { Redirect } from 'react-router'

class Plants extends Component {
    render() {
        let plantsList;
        const { plants } = this.props;
        if (plants && plants !== []) {
            plantsList = plants.map(plantInstance => {
                console.log('INSIDE PLANTS plants', plants)
                console.log("INSIDE PLANTS plant", plantInstance)
                return (
                    <Grid item xs={12} sm={4}>
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
        // return this.props.loggedIn ? (
        return (
            <Grid container spacing={2} style={{ marginTop: '10vh' }}>
                {plantsList}
            </Grid>
        )
        // ) : <Redirect to="/login" />;
    }
}

export default Plants;