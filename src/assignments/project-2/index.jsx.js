import React from 'react'
import PropTypes from './support/prop-types'
import autobind from 'class-autobind'
import ChatRoomComponent from './components/chatroom/chatroom.component.jsx.js'

import ChatroomStatus from "./components/chatroom-status/chatroom-status.component.jsx.js";
import MemberList from './components/member-list/member-list.component.jsx'
import AppHeader from './components/app-header/app-header.component.jsx';
import AdList from './components/ad-list/ad-list.component.jsx';

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

		return <div className="global-wrapper">

			<AppHeader pageTitle="welcome to {champ chat}" />
			<section className="chat-area">
				<div className="member-list">
					<h2>Members</h2>
					<MemberList classroom={classroom} />
					<AdList ads={FAKEADS} />
				</div>


				<div className="chatroom">
					<ChatRoomComponent messages=
						{chat.messages} />
				</div>

				<div className="chatroom-status-container">
					<div className="chatroom-status">
						<ChatroomStatus statusMessage={this.getTypingMessage()} />
					</div>
				</div>
			</section>

			<div className="user-input">
				<div className="button-container">
					<input value={currentText} onChange={this.onType} onKeyUp={this.onSend} />
					<button disabled={currentText === ``} onClick={this.onSend}>Send
						{/*<div class="bg"></div>
						<img src="https://i.cloudup.com/2ZAX3hVsBE-3000x3000.png" id="bg" width="32px" height="32px" style="opacity:0;"/>
						<div class="around around-boarder" onclick="ani(); anitwo();"></div> */}
					</button>
				</div>
			</div>
		</div>
	}
}

// array of fake ads for AdList component to consume
const FAKEADS = [
	{
		id: "1",
		buttonCopy: "Click me",
		buttonUrl: "http://localhost:3000",
		imageUrl: "https://avatars0.githubusercontent.com/u/6720549?s=200&v=4",
		imageAltText: "Natalya Shelburne, spokesperson for Champ Chat",
	},

	{
		id: "2",
		buttonCopy: "Also click me",
		buttonUrl: "http://localhost:3000",
		imageUrl: "https://avatars0.githubusercontent.com/u/1202267?s=200&v=4",
		imageAltText: "Some guy named Tim",
	},
];

Chat.propTypes = {
	classroom: PropTypes.shape({
<<<<<<< HEAD
		students: PropTypes.arrayOf(PropTypes.student).isRequired
=======
		self: studentPropType,
		students: PropTypes.arrayOf(studentPropType).isRequired,
>>>>>>> master
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
