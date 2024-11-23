import React from 'react'
import Cookies from 'js-cookie'
import { default as Countries } from '../../../../util/jsonFiles/countries.json';
import { ChildSingleInput } from '../Form/SingleInput.jsx';
import * as Yup from 'yup';

export class Address extends React.Component {
    constructor(props) {
        super(props)
        
        const address = props.addressData ?
            Object.assign({}, props.addressData)
            : {
                number: "",
                street: "",
                suburb: "",
                postcode: "",
                city: "",
                country: "",
            }
        
        this.state = {
            showEditSection: false,
            newData: address
        }

        this.schema = Yup.object().shape({
            number: Yup.string().required('Address number required.'),
            street: Yup.string().required('Street name required.'),
            suburb: Yup.string().required('Suburb required.'),
            postcode: Yup.number().required('Postal code required'),
            city: Yup.string().required('City required.'),
            country: Yup.string().required('Country required.'),
        })

        this.openEdit = this.openEdit.bind(this);
        this.closeEdit = this.closeEdit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.saveData = this.saveData.bind(this);
        this.renderEdit = this.renderEdit.bind(this);
        this.renderDisplay = this.renderDisplay.bind(this);
    }

    openEdit() {
        const newData = Object.assign({}, this.props.addressData);
        this.setState({
            showEditSection: true,
            newData: newData
        });
    }

    closeEdit(){
        this.setState({
            showEditSection: false,
        });
    }

    handleChange(event){
        const data = Object.assign({}, this.state.newData);
        data[event.target.name] = event.target.value;
        this.setState({
          newData: data
        });
    }

    saveData() {
        try {
            const valid = this.schema.validateSync(this.state.newData);
            this.props.updateProfileData(this.props.componentId, data);
            this.closeEdit();
          } catch (error) {
            console.log("error",error);
            TalentUtil.notification.show(error, "error", null, null);
          }
    }

    renderEdit() {
        return (
            <p>Edit</p>
        )
    }

    renderDisplay() {
        return (
            <p>Display</p>
        )
    }
   
    render() {
        return(
            this.state.showEditSection ? this.renderEdit() : this.renderDisplay()
        )
    }

}

export class Nationality extends React.Component {
    constructor(props) {
        super(props)
       
    }

    
    render() {

        
    }
}