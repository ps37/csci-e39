import React from 'react'
import PropTypes from '../../support/prop-types'
import autobind from 'class-autobind'

class MessageComponent extends React.Component {
    constructor() {
        super(...arguments);
        autobind(this);
    }

    render() {
        const {message}=this.props;

        return  <div key={message.id}>
                    <label>{message.student.name} at {message.createdAt.toISOString()}</label>
                    <p>{message.text}</p>
                </div>
    }
}

MessageComponent.propTypes = {
    message: PropTypes.message
};

export default MessageComponent;