import React, { Component } from "react";
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { addPlant } from '../../actions/plant'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
// import Slider from '@material-ui/core/Slider';
import { IconButton } from "@material-ui/core";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Reminder from '../Reminder'

class PlantInput extends Component {
    state = {
        name: "",
        notes: "",
        water_frequency: "7",
        image_url: "https://png.pngtree.com/element_our/png_detail/20181229/sprout-plant-graphic-icon-design-template-png_301529.jpg",
        add_plant_mode: false
    };

    handleOnSubmit = e => {
        e.preventDefault();
        console.log('Props in PlantForm:', this.props)
        this.props.addPlant({
            name: this.state.name,
            notes: this.state.notes,
            water_frequency: this.state.water_frequency,
            image_url: this.state.image_url
        }, this.props.currentUser.id);
        this.setState({
            name: "",
            notes: "",
            water_frequency: "7",
            image_url: "https://png.pngtree.com/element_our/png_detail/20181229/sprout-plant-graphic-icon-design-template-png_301529.jpg",
            add_plant_mode: false
        });
    };

    handleOpenCloseAddPlant = () => {
        const toggledValue = !this.state.add_plant_mode
        this.setState({ add_plant_mode: toggledValue });
    };

    handleOnChangeName = e => {
        this.setState({ name: e.target.value });
    };

    handleOnChangeNotes = e => {
        this.setState({ notes: e.target.value });
    };

    handleOnChangeWaterFrequency = e => {
        console.log("INSIDE CHANGE WATER FREQ", e)
        this.setState({ water_frequency: e.target.value });
    };

    handleOnChangeImageUrl = e => {
        this.setState({ image_url: e.target.value });
    };

    render() {
        console.log("PLANT INPUT PROPS: ", this.props)
        console.log("PLANT INPUT STATE: ", this.state)
        return (
            <div>
                <div align="center">
                    <IconButton aria-label="add-plant" onClick={this.handleOpenCloseAddPlant}>
                        <AddCircleOutlineIcon />
                    </IconButton>
                </div>
                <Dialog onSubmit={this.handleOnSubmit} open={this.state.add_plant_mode} onClose={this.handleOpenCloseAddPlant} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Add Plant</DialogTitle>
                    <DialogContent>
                        <TextField autoFocus label="Name" fullWidth onChange={this.handleOnChangeName} />
                        <TextField label="Notes" fullWidth onChange={this.handleOnChangeNotes} multiline rows={4} />
                        <TextField label="Image URL" fullWidth onChange={this.handleOnChangeImageUrl} />
                        {/* <Typography id="input-slider">
                        <TextField label="Image URL" fullWidth onChange={this.handleOnChangeImageUrl} />
                            Water Frequency
                        </Typography> */}
                        <TextField type="number" label="Water Frequency" max={30} onChange={this.handleOnChangeWaterFrequency} />
                        <Reminder name={this.state.name} notes={this.state.notes} water_frequency={this.state.water_frequency} />
                        {/* <Slider onChange={this.handleOnChangeWaterFrequency} aria-labelledby="input-slider" defaultValue={7} valueLabelDisplay="on" max={30} /> */}
                        {/* <input type="file" display="none" id="upload-photo" style={{ display: "none" }} />
                        <label htmlFor="upload-photo">
                            <Button variant="outlined" color="primary" component="span">
                                Upload Photo
                            </Button>
                        </label> */}
                    </DialogContent>
                    <DialogActions>
                        <Button type="submit" fullWidth variant="contained" onClick={this.handleOnSubmit}>
                            Submit
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        plants: state.plantsReducer.plants,
        currentUser: state.usersReducer.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addPlant: (plant, currentUser) => addPlant(plant, currentUser)(dispatch)
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PlantInput));