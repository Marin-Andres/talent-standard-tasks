import React from 'react'
import { SingleInput } from '../Form/SingleInput.jsx';
import { Select } from '../Form/Select.jsx';
import { UTCDatePicker } from '../Form/UTCDatePicker.jsx';

export default class VisaStatus extends React.Component {
    constructor(props) {
        super(props)

        const inputDate  = this.props.visaExpiryDate ? this.props.visaExpiryDate : null;
        console.log("inputDate", inputDate)
        this.state = {
            expiryDate: this.props.visaExpiryDate,
            showDate: inputDate
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    handleChange(event) {
        if (event.target.value) {
            const newData = {};
            newData[event.target.name] = event.target.value;
            this.props.saveProfileData(newData);
        }
        else {
            TalentUtil.notification.show("Invalid visa type", "error", null, null);
        }
    }

    handleDateChange(date) {
        this.setState({
          expiryDate: date
        });    
    }

    handleSave() {
        const newData = {};
        newData['visaExpiryDate'] = this.state.expiryDate;
        this.props.saveProfileData(newData);
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
                                selected={this.state.expiryDate}
                                onChange={this.handleDateChange}
                            />
                        </div>
                    </div>
                    <div className='ui four wide column'>
                        <div className="field" style={{ marginTop: '1.75em'}}>
                            <button type="button" className="ui teal button" onClick={this.handleSave}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}