import React from 'react'
import { Form, FormField, Checkbox } from 'semantic-ui-react';

export default class TalentStatus extends React.Component {
    constructor(props) {
        super(props);

        this.statusList = {
            "active":     "Actively looking for a job",
            "notLooking": "Not looking for a job at the moment",
            "open":       "Currently employed but open to offers",
            "later":      "Wil lbe available on later date",
        };

        this.handleChange = this.handleChange.bind(this);
        this.isChecked = this.isChecked.bind(this);
    }

    isChecked(statusValue) {
        console.log("props",this.props);
        const jobSeekingStatus = this.props.status ? this.props.status.status : null;
        return (jobSeekingStatus === statusValue);
    }

    handleChange(event, data) {
        const newData = {};
        newData[data.name] = data.value;
        console.log(newData);
        this.props.updateProfileData(this.props.componentId, newData);
    }
    
    render() {
        return (
            <div className='row'>
                <div className='ui sixteen wide column'>
                    <div className="field">
                        <FormField>
                            <label>Current Status</label>
                        </FormField>
                        <FormField>
                            <Checkbox
                                radio
                                label={this.statusList["active"]}
                                name='status'
                                value={this.statusList["active"]}
                                checked={this.isChecked(this.statusList["active"])}
                                onChange={this.handleChange}
                            />
                        </FormField>
                        <FormField>
                            <Checkbox
                                radio
                                label={this.statusList["notLooking"]}
                                name='status'
                                value={this.statusList["notLooking"]}
                                checked={this.isChecked(this.statusList["notLooking"])}
                                onChange={this.handleChange}
                            />
                        </FormField>
                    </div>
                </div>
            </div>
        )
    }
}