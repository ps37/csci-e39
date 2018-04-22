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
    render() {
        const { message } = this.props;

        return (
            <div key={message.id}>
                <label>
                    {message.student.name} at {message.createdAt.toISOString()}
                </label>
                <p
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
