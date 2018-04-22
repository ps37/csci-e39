import React from 'react'
import PropTypes from '../../support/prop-types'
import autobind from 'class-autobind'

class MessageComponent extends React.Component {
    constructor() {
        super(...arguments);
        autobind(this);
    }

    formatDate(date) {
      const today = new Date();
      const timeDiff = Math.abs(today.getTime() - date.getTime());
      const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
      if (diffDays > 1) {
        return date.toLocaleString("en-US", {
            hour12: true,
            localeMatcher: "lookup",
        })
      };
      const localeSpecificTime = date.toLocaleTimeString("en-US", {
          hour12: true,
          localeMatcher: "lookup"
      });
      return localeSpecificTime.replace(/:\d+ /, ' ');
    };

    render() {
        const {message}=this.props;

        return  <div key={message.id}>
                    <label>
                        {message.student.name}
                        <span className="message-date-string">
                            {this.formatDate(message.createdAt)}
                        </span>
                    </label>
                    <p>{message.text}</p>
                </div>
    }
}

MessageComponent.propTypes = {
    message: PropTypes.message
};

export default MessageComponent;