import React, { Component } from "react";
import { updatePlant, deletePlant } from '../../actions/plant'
import { connect } from 'react-redux'

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { IconButton, Typography } from "@material-ui/core";
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slider from '@material-ui/core/Slider';

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

    handleOpenCloseEditPlant = () => {
        const toggledValue = !this.state.editMode
        this.setState({ editMode: toggledValue });
    };

    render() {
        const { plantProps } = this.props;

        return (
            <div>
                <Card>
                    <CardHeader
                        title={plantProps.name}
                    />
                    <CardMedia
                        component="img"
                        src={plantProps.image_url}
                        title="plant"
                    />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {plantProps.notes}
                        </Typography>
                    </CardContent>
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Water every {plantProps.water_frequency} days
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton
                            aria-label="edit"
                            onClick={this.handleEditClick}
                        >
                            <EditIcon />
                        </IconButton>
                        <IconButton
                            aria-label="delete"
                            onClick={this.handleDeleteClick}
                        >
                            <DeleteForeverIcon />
                        </IconButton>
                    </CardActions>
                </Card>

                {/* EDIT FORM */}
                {/* {this.state.editMode ? ( */}
                <div>
                    <Dialog onSubmit={this.handleOnSubmit} open={this.state.editMode} onClose={this.handleOpenCloseEditPlant} aria-labelledby="form-dialog-title">
                        <DialogTitle id="form-dialog-title">Edit Plant</DialogTitle>
                        <DialogContent>
                            <TextField autoFocus label="Name" fullWidth onChange={this.handleOnChangeName} defaultValue={this.state.name} />
                            <TextField label="Notes" fullWidth onChange={this.handleOnChangeNotes} multiline rows={4} defaultValue={this.state.notes} />
                            <Typography id="input-slider">
                                Water Frequency
                            </Typography>
                            <Slider onChange={this.handleOnChangeWaterFrequency} aria-labelledby="input-slider" defaultValue={this.state.water_frequency} valueLabelDisplay="on" max={30} />
                            {/* <input type="file" display="none" id="upload-photo" style={{ display: "none" }} />
                            <label htmlFor="upload-photo">
                                <Button variant="outlined" color="primary" component="span">
                                    Upload Photo
                                </Button>
                            </label> */}
                            <TextField label="Image URL" fullWidth onChange={this.handleOnChangeImageUrl} />
                        </DialogContent>
                        <DialogActions>
                            <Button type="submit" fullWidth variant="contained" color="primary" onClick={this.handleOnSubmit}>
                                Submit
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>
                {/* ) : null} */}
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