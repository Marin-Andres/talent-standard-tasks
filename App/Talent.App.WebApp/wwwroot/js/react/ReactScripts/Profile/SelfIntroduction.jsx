/* Self introduction section */
import React, { Component } from 'react';
import Cookies from 'js-cookie';
export default class SelfIntroduction extends React.Component {
    constructor(props) {
        super(props);
    
    };

    
    render() {
        return (
            <div className='ui sixteen wide column'>
                <div className='field'>
                    <input
                        placeholder="Please provide a short summary about yourself"
                        maxLength="150"
                        value = {this.props.summary}
                    />
                    <label>Summary must be no more than 150 characters.</label>
                </div>
                <div className='field'>
                    <textarea
                        placeholder="Please tell us about any hobbies, additional expertise, or anything else you’d like to add."
                        maxLength="600"
                        value={this.props.description}
                    />
                    <label>Description must be between 150-600 characters.</label>
                </div>
                <div className="sixteen wide column">
                    <div>
                        <input type="button" className="ui teal button right floated" onClick={null} value="Save"></input>
                    </div>
                </div>
            </div>
        )
       
    }
}



