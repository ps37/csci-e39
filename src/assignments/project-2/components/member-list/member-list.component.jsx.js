import React from 'react'
import PropTypes from 'prop-types'
import autobind from 'class-autobind'
import Member from '../member/member.component.jsx'


class MemberList extends React.Component {
    render() {
        return <ul className="member-list" >
            {
                this.props.classroom.students.map(({ id, name }) =>
                    <Member key={id} name={name} />
                )
            }
        </ul >

    }
}

export default MemberList