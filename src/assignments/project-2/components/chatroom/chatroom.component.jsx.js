import React from 'react'
import PropTypes from '../../support/prop-types'
import autobind from 'class-autobind'
import MessageComponent from "../message/message.component.jsx";

class ChatRoomComponent extends React.Component {

    constructor() {
        super(...arguments);
        autobind(this);
    }

    render() {
        const {messages}=this.props;
        return  <div>
                    <h2>Messages</h2>
                    <ul role="status" aria-live="polite" aria-relevant="additions">
                        {messages.map((message) =>
                            <MessageComponent message={message}/>
                        )}
                    </ul>
                </div>
    }
}

ChatRoomComponent.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.message).isRequired
};

export default ChatRoomComponent;