import React from 'react';
import { Loader } from 'semantic-ui-react';

export default class CompanyProfile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {        
        return (
            <div className="ui card">
                <div className="content">
                    <div className="center aligned header">MVP Studio</div>
                    <div className="center aligned address">
                        <p>Auckland, New Zealand</p>
                    </div>
                </div>
                <div className="extra content">
                    <div className="center aligned author">
                        <img className="ui avatar image" src="http://semantic-ui.com/images/avatar/small/jenny.jpg" />
                    </div>
                </div>
            </div>
        )    }
}