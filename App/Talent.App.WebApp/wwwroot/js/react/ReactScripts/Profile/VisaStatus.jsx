import React from 'react'
import { SingleInput } from '../Form/SingleInput.jsx';
import { Select } from 'semantic-ui-react';

export default class VisaStatus extends React.Component {
    constructor(props) {
        super(props)
        
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        if (event.target.value) {
            console.log("name, value",event.target.name, event.target.value)
            const newData = {};
            newData[event.target.name] = event.target.value;
            this.props.saveProfileData(newData);
        }
        else {
            TalentUtil.notification.show("Invalid visa type", "error", null, null);
        }
    }

    render() {
        const visaTypeList = [
            "Citizen", 
            "Permanent Resident", 
            "Work Visa", 
            "Student Visa"]
        ;
        const visaOptions = visaTypeList.map(o => ({value: o, title: o}));
        console.log(visaOptions);

        return (
            <div className='ui grid'>
                <div className='ui six wide column'>
                    <div className="field">
                        <label>Visa type</label>
                        <Select
                            name="visaStatus"
                            selectedOption={this.props.visaStatus}
                            controlFunc={this.handleChange}
                            options={visaOptions}
                            placeholder="Select your visa type"
                        />
                    </div>
                </div>
            </div>
        )
    }
}