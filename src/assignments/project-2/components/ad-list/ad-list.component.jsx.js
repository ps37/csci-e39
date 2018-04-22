import React from 'react'
import PropTypes from 'prop-types'
import autobind from 'class-autobind'
import Ad from '../ad/ad.component.jsx'


class AdList extends React.Component {
    constructor() {
        super(...arguments);
        autobind(this);
    }

    render() {
        return <ul className="ad-list" >
            {
                this.props.ads.map(({ id, buttonCopy, buttonUrl, imageUrl, imageAltText }) =>
                    <Ad key={id} buttonCopy={buttonCopy} buttonUrl={buttonUrl} imageUrl={imageUrl} imageAltText={imageAltText} />
                )
            }
        </ul >

    }
}

export default AdList