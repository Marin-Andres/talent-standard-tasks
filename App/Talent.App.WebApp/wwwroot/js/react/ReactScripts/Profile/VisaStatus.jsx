import React from 'react'
import { SingleInput } from '../Form/SingleInput.jsx';
import { Select } from '../Form/Select.jsx';
import { UTCDatePicker } from '../Form/UTCDatePicker.jsx';

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
        return (
            <div className='ui grid'>
                <div className='row'>
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
                    <div className='ui six wide column'>
                        <div className="field">
                            <label>Visa expiry date</label>
                            <UTCDatePicker
                                selected={null}
                                onChange={() => {}}
                            />
                        </div>
                    </div>
                    <div className='ui four wide column'>
                        <div className="field" style={{ marginTop: '1.75em'}}>
                            <button type="button" className="ui teal button" onClick={null}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}