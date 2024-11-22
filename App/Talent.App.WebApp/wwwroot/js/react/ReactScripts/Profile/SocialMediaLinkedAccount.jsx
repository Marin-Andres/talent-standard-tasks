/* Social media JSX */
import React from 'react';
import { ChildSingleInput } from '../Form/SingleInput.jsx';
import { Popup } from 'semantic-ui-react';
import * as Yup from 'yup';
import { Icon } from 'semantic-ui-react';

export default class SocialMediaLinkedAccount extends React.Component {
    constructor(props) {
        super(props);

        const linkedAccounts = props.linkedAccounts ?
            Object.assign({}, props.linkedAccounts)
            : {
                linkedIn: "",
                github: "",
            }

        this.state = {
            showEditSection: false,
            newData: linkedAccounts
        }
        this.schema = Yup.object().shape({
            linkedIn: Yup.string().matches(TalentUtil.linkedInRegExp(), 'Invalid LinkedIn URL.'),
            github: Yup.string().matches(TalentUtil.githubRegExp(), 'Invalid GitHub URL.'),
        })

        this.openEdit = this.openEdit.bind(this);
        this.closeEdit = this.openEdit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.saveData = this.handleChange.bind(this);
        this.renderEdit = this.renderEdit.bind(this);
        this.renderDisplay = this.renderDisplay.bind(this);
    }

    openEdit() {

    }

    closeEdit(){

    }
    handleChange() {

    }
    handleChange(){

    }
    renderEdit(){

    }
    renderDisplay(){
        return (
        <div className='row'>
            <div className="ui sixteen wide column">
            <button type="button" className="ui left floated blue button"><Icon name='linkedin'></Icon>LinkedIn</button>
            <button type="button" className="ui left floated black button"><Icon name='github'></Icon>GitHub</button>
            <button type="button" className="ui right floated teal button" onClick={this.openEdit}>Edit</button>
            </div>
        </div>
        )
    }


    render() {
        return (
            this.state.showEditSection ? this.renderEdit() : this.renderDisplay()
        )
    }
}