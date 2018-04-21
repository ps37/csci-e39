import React from 'react'
import PropTypes from 'prop-types'
import autobind from 'class-autobind'


class Member extends React.Component {
    // name, classname
    render() {
        const additionalClass = this.props.additionalClass ? this.props.additionalClass : "";
        return <li className="member ${additionalClass}">{this.props.name}</li>
    }
}

export default Member