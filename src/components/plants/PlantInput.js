import React, { Component } from "react";

class PlantInput extends Component {
    state = {
        name: ""
    };

    handleOnSubmit = e => {
        e.preventDefault();
        this.props.addPlant({
            name: this.state.name
        });
        this.setState({ name: "" });
    };

    handleOnChange = e => {
        this.setState({ name: e.target.value });
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <label htmlFor="input-plant">Plant: </label>
                    <input
                        type="name"
                        id="input-plant"
                        value={this.state.name}
                        onChange={this.handleOnChange}
                    />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default PlantInput;