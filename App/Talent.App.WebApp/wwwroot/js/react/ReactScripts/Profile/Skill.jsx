/* Skill section */
import React from 'react';
import Cookies from 'js-cookie';
import { Select } from '../Form/Select.jsx'


export class AddNewItem extends React.Component {
    constructor(props) {
        super(props);

        this.levelOptions = [
            {value: "Beginner", title: "Beginner"}, 
            {value: "Intermediate", title:"Intermediate"}, 
            {value: "Expert", title:"Expert"}
        ];

        this.state = {
            newData: {name: "", level: ""}
        };

        this.close = this.close.bind(this);
        this.add = this.add.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };

    close() {
        this.props.closeFunc();
    };

    handleChange(event){
        const data = Object.assign({}, this.state.newData);
        data[event.target.name] = event.target.value;
        this.setState({
          newData: data
        });
    }

    add() {
        if (this.state.newData.name === "") {
            TalentUtil.notification.show("Invalid skill name", "error", null, null);
            return;
        }
        if (this.state.newData.level === "") {
            TalentUtil.notification.show("Invalid skill level", "error", null, null);
            return;
        }
        this.props.addFunc(this.state.newData);
        this.close();
    };

    render() {
      
        return (
            this.props.show ? 
            <div className="ui grid">
                <div className="row">
                    <div className="ui five wide column">
                        <input
                            type='text'
                            name='name'
                            placeholder="Add Skill"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="ui five wide column">
                        <Select
                            type='text'
                            name='level'
                            placeholder="Skill Level"
                            options={this.levelOptions}
                            controlFunc={this.handleChange}
                        />
                    </div>
                    <div className="ui six wide column">
                    <button type="button" className="ui teal button" onClick={this.add}>Add</button>
                    <button type="button" className="ui button" onClick={this.close}>Cancel</button>

                    </div>
                </div>
            </div>
            : ""
        )
    }
}

export default class Skill extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showAddNew: false
        }

        this.openAddNew = this.openAddNew.bind(this);
        this.closeAddNew = this.closeAddNew.bind(this);
        this.addSkill = this.addSkill.bind(this);
    };

    openAddNew() {
        this.setState({
            showAddNew: true
        });
    }

    closeAddNew() {
        this.setState({
            showAddNew:false
        });
    }

    addSkill(data){
        console.log("data",data);
        var cookies = Cookies.get('talentAuthToken');
        $.ajax({
            url: 'http://localhost:60290/profile/profile/addSkill',
            headers: {
                'Authorization': 'Bearer ' + cookies,
                'Content-Type': 'application/json'
            },
            type: "POST",
            data: JSON.stringify(data),
            success: function (res) {
                if (res.success == true) {
                    TalentUtil.notification.show("Skills updated successfully", "success", null, null)
                } else {
                    TalentUtil.notification.show("Skills did not update successfully", "error", null, null)
                }

            }.bind(this),
            error: function (res) {
                TalentUtil.notification.show("Error while saving Employer details", "error", null, null);
            }
        })
    }

    render() {
        return(
            <div className='ui sixteen wide column'>
                <AddNewItem
                    show={this.state.showAddNew}
                    closeFunc={this.closeAddNew}
                    addFunc={this.addSkill}
                />
                <table class="ui table">
                    <thead>
                        <tr>
                            <th>Skill</th>
                            <th>Level</th>
                            <th>
                                <button type="button" className="ui right floated teal button" onClick={this.openAddNew}>+ Add New</button>
                            </th>
                        </tr>
                    </thead>
                </table>
            </div>                
        )
    }
}

