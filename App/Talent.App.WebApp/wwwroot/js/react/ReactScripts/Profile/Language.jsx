/* Language section */
import React from 'react';
import Cookies from 'js-cookie';
import LevelItem from './LevelItem.jsx'

export default class Language extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        const levelOptions = [
            {value: "Beginner", title: "Beginner"}, 
            {value: "Intermediate", title:"Intermediate"}, 
            {value: "Expert", title:"Expert"}
        ];
        return(
            <LevelItem
                levelOptions={levelOptions}
                itemName="language"
                itemData={this.props.languageData}
                updateProfileData={this.props.updateProfileData}
            />
        )
    }
}

