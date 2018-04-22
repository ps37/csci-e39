import React from "react";
import PropTypes from "../../support/prop-types";
import autobind from "class-autobind";

class MessageComponent extends React.Component {
    constructor() {
        super(...arguments);
        autobind(this);
    }


    getBold(msg) {
        let start = msg.indexOf("*");
        let end = msg.lastIndexOf("*");
        if (start === -1) return msg;
        return (
            msg.substring(0, start) +
            "<b>" +
            msg.substring(start + 1, end) +
            "</b>" +
            msg.substring(end + 1)
        );
    }
    renderMessage(msg) {
        if (msg.startsWith("https")) {
            return "<a href=''>" + msg + "</a>";
        }
        let parts = msg.split(" ");
        const emojiRepo = {
            ":D": "😎",
            ":)": "🙂"
        };
        let emojiMsg = parts.map(word => {
            if (emojiRepo[word]) return emojiRepo[word];
            else if (word[0] === "*" && word[word.length - 1] === "*")
                return "<b>" + word.substring(1, word.length - 1) + "</b>";
            else return word;
        });
        return this.getBold(emojiMsg.join(" "));
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
        const { message } = this.props;

        return (
            <div key={message.id} className="message">
                 <span>
                        {message.student.name}
                        <span className="message-date-string">
                            {this.formatDate(message.createdAt)}
                    </span>
              </span>
                <p className="message-text"
                    dangerouslySetInnerHTML={{
                        __html: this.renderMessage(message.text)
                    }}
                />
            </div>
        );

    }
}

MessageComponent.propTypes = {
    message: PropTypes.message
};

export default MessageComponent;
