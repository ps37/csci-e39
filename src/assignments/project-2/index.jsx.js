import React from 'react'
import PropTypes from './support/prop-types'
import autobind from 'class-autobind'
import ChatRoomComponent from './components/chatroom/chatroom.component.jsx.js'

import ChatroomStatus from "./components/chatroom-status/chatroom-status.component.jsx.js";
import MemberList from './components/member-list/member-list.component.jsx'
import AppHeader from './components/app-header/app-header.component.jsx';

class Chat extends React.Component {
	constructor() {
		super(...arguments);
		autobind(this);
		this.state = {
			currentText: ``
		};
	}

	onType(e) {
		const { chat } = this.props.actions
		const { currentText: prevText } = this.state
		const currentText = e.target.value
		if (!currentText.length) chat.stopTyping();
		if (currentText.length === 1 && !prevText.length) chat.startTyping();
		this.setState({ currentText });
	}

	onSend(e) {
		if (e.type === `keyup` && e.key !== `Enter`) return;
		const { chat } = this.props.actions;
		const { currentText } = this.state;
		if (!currentText.length) return;
		chat.send(currentText);
		this.setState({ currentText: `` });
	}

	getTypingMessage() {
		const { typing } = this.props.chat;

		switch (typing.length) {
			case 0:
				return "No users typing at the moment";
			case 1:
				return `${typing[0].name} is typing...`;
			case 2:
				return `${typing[0].name} and ${typing[1].name} are typing...`;
			case 3:
				return `${typing[0].name}, ${typing[1].name}, and ${
					typing[2].name
				} are typing...`;
			// len > 3
			default:
				return `${typing.length} members are typing...`;
		}
	}

	render() {
		const { classroom, chat, actions } = this.props
		const { currentText } = this.state

		return <div>

			<AppHeader />
			<h2>Members</h2>
			<MemberList classroom={classroom} />


			<ChatRoomComponent messages=
				{chat.messages}/>

			<input value={currentText} onChange={this.onType} onKeyUp={this.onSend} />
			<button disabled={currentText === ``} onClick={this.onSend}>Send</button>
			<ChatroomStatus statusMessage={this.getTypingMessage()} />
		</div>
	}
}

Chat.propTypes = {
	classroom: PropTypes.shape({
		students: PropTypes.arrayOf(PropTypes.student).isRequired
	}).isRequired,
	chat: PropTypes.shape({
		typing: PropTypes.arrayOf(PropTypes.student).isRequired,
		messages: PropTypes.arrayOf(PropTypes.message).isRequired,
		send: PropTypes.shape({
			status: PropTypes.oneOf([`init`, `pending`, `success`, `failure`])
				.isRequired,
			message: PropTypes.string.isRequired
		}).isRequired
	}),
	actions: PropTypes.object.isRequired
};

export default Chat;
