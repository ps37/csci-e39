import React from 'react'
import PropTypes from 'prop-types'
import autobind from 'class-autobind'

// image and button
// button needs to support custom action call and link  
// current ex are Slack and Hipchat

//url: ad-url
//image alt text
//image = ad-image
//text within button = button-copy

class Ad extends React.Component {
    constructor() {
        super(...arguments);
        autobind(this);
    }

    render() {
        // const FAKEADS = [
        //     {
        //         id: "1",
        //         buttonCopy: "Click me",
        //         buttonUrl: "http://localhost:3000",
        //         imageUrl: "https://avatars0.githubusercontent.com/u/6720549?s=200&v=4",
        //         imageAltText: "Natalya Shelburne, spokesperson for Champ Chat",
        //     }

        // ];
        return <div className="ad-group">
            <div className="ad-group-image">
                <img src={this.props.imageUrl} alt={this.props.imageAltText} />
            </div>
            <div className="ad-group-button">
                <a type="button" className="ad-copy" href={this.props.buttonUrl}>{this.props.buttonCopy}</a>
            </div>
        </div >
    }
}

Ad.PropTypes = {
    imageUrl: PropTypes.string.isRequired,
    imageAltText: PropTypes.string.isRequired,
    buttonCopy: PropTypes.string.isRequired,
    buttonUrl: PropTypes.string.isRequired
}

export default Ad
