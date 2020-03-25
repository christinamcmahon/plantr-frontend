import React from 'react';
import AddToCalendar from 'react-add-to-calendar';

export default class Reminder extends React.Component {
    state = {
        event: {
            title: `Water your ${this.props.name}`,
            description: `Notes: ${this.props.notes}`
        }
    };

    render() {
        return <AddToCalendar event={this.state.event} />;
    };
}