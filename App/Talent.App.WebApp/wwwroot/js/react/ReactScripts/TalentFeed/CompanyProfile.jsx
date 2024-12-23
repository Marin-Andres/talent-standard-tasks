import React from 'react';
import Cookies from 'js-cookie';
import { Icon, Loader } from 'semantic-ui-react';

export default class CompanyProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            employerData: null
        };
        this.loadData = this.loadData.bind(this);
    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        var cookies = Cookies.get('talentAuthToken');
        $.ajax({
            url: 'http://localhost:60290/profile/profile/getEmployerProfile',
            headers: {
                'Authorization': 'Bearer ' + cookies,
                'Content-Type': 'application/json'
            },
            type: "GET",
            contentType: "application/json",
            dataType: "json",
            success: function (res) {
                let employerData = null;
                if (res.employer) {
                    employerData = res.employer
                    //console.log("employerData", employerData)
                }
                this.setState({
                    employerData: employerData,
                    isLoading: false
                });
            }.bind(this),
            error: function (res) {
                console.log(res.status)
            }
        }) 
    }

    render() {
        const { isLoading, employerData } = this.state;
        const name = employerData ? employerData.companyContact.name : '';
        const city = employerData ? employerData.companyContact.location.city : '';
        const country = employerData ? employerData.companyContact.location.country : '';
        const profilePhoto = "a";//mployerData ? employerData.profilePhotoUrl : '';
        const phone = employerData ? employerData.companyContact.phone : '';
        const email = employerData ? employerData.companyContact.email : '';
        const skills = employerData ? employerData.skills : [];
        const skillString = skills.length > 0 ? skills.join(', ') : 'We currently do not have specific skills that we desire.';


        if (isLoading) {
            return <Loader active inline='centered' />;
        }

        return (
            <div className="ui card">
                <div className="content">
                <div className="center aligned author">
                    {profilePhoto ? (
                        <img className="ui avatar image" src="/images/image.png" alt="Profile Photo" />
                    ) : (
                        <div className="ui placeholder">
                            <div className="image"></div>
                        </div>
                    )}
                </div>
                  
                    <div className="center aligned header">{name}</div>
                    <div className="center aligned address">
                        <p>{city}, {country}</p>
                    </div>
                    <div className="center aligned description">
                        <p>{skillString}</p>
                    </div>
                </div>
                <div className="extra content">
                    <div className="left aligned">
                        <p><Icon name='phone' />: {phone}</p>
                        <p><Icon name='mail' />: {email}</p>
                    </div>
                </div>
            </div>
        );
    }
}