/* Self introduction section */
import React, { Component } from 'react';
import Cookies from 'js-cookie';
export default class SelfIntroduction extends React.Component {
    constructor(props) {
        super(props);
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
    };

    handleChange(event) {
        const data = {};
        data[event.target.name] = event.target.value;
        this.props.updateWithoutSave(data);
    }

    handleSave(event) {
        const data = {};
        console.log("event",event);
        data[event.target.name] = event.target.value;
        this.props.updateProfileData(data);
        //TODO validation
    }
    
    render() {
        return (
            <div className='ui sixteen wide column'>
                <div className='field'>
                    <input
                        name="summary"
                        placeholder="Please provide a short summary about yourself"
                        maxLength="150"
                        value = {this.props.summary}
                        onChange={this.handleChange}
                    />
                    <label>Summary must be no more than 150 characters.</label>
                </div>
                <div className='field'>
                    <textarea
                        name="description"
                        placeholder="Please tell us about any hobbies, additional expertise, or anything else you’d like to add."
                        maxLength="600"
                        value={this.props.description}
                        onChange={this.handleChange}
                    />
                    <label>Description must be between 150-600 characters.</label>
                </div>
                <div className="sixteen wide column">
                    <div>
                        <input type="button" className="ui teal button right floated" onClick={this.handleSave} value="Save"></input>
                    </div>
                </div>
            </div>
        )
       
    }
}



