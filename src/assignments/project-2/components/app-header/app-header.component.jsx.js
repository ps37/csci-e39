import React from 'react'
import PropTypes from 'prop-types'
import autobind from 'class-autobind'

class AppHeader extends React.Component {

    render() {
        return <header className="app-header"><h1>{this.props.pageTitle}</h1></header>
    }
}

export default AppHeader