import React from 'react';
import AddToCalendar from 'react-add-to-calendar';
import Button from '@material-ui/core/Button'

export default class Reminder extends React.Component {
    state = {
        event: {
            title: `Water your Plant`,
            description: `For recurring reminders, set this event to repeat according to your plant's care instructions. You may also consider turning on notifications...`
        }
    };

    handleChange = () => {
        this.setState({
            event: {
                title: `Water your ${this.props.name}`,
                description: `For recurring reminders, set this event to repeat according to your plant's care instructions. You may also consider turning on notifications... Plant Notes: ${this.props.notes}`
            }
        })
    }

    render() {
        console.log(this.props)
        return (
            <Button variant="contained" fullWidth onClick={this.handleChange}>
                <AddToCalendar event={this.state.event} />
            </Button>
        );
    };
}