import React from 'react';
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types'
import { Card, Grid, Button, Image, Popup, Icon } from 'semantic-ui-react'

export default class TalentCard extends React.Component {
    constructor(props) {
        super(props);
       
    };

    
    
    render() {
        return (
        <Card fluid>
            <Card.Content>
            <Grid>
                <Grid.Row columns={2}>
                <Grid.Column width={6}>
                    <Image
                    src="https://via.placeholder.com/150"
                    size="tiny"
                    circular
                    style={{ marginTop: "5px" }}
                    />
                </Grid.Column>
                <Grid.Column width={10}>
                    <Card.Header>
                    Ru (Talent) Ng
                    <Icon name="star outline" style={{ float: "right" }} />
                    </Card.Header>
                    <Card.Meta>Talent snapshot</Card.Meta>
                    <Card.Description>
                    <p>
                        <strong>Current Employer:</strong> ABC
                    </p>
                    <p>
                        <strong>Visa Status:</strong> Citizen
                    </p>
                    <p>
                        <strong>Position:</strong> Software Developer
                    </p>
                    </Card.Description>
                </Grid.Column>
                </Grid.Row>
            </Grid>
            </Card.Content>
            <Card.Content extra>
            <Button.Group fluid>
                <Button icon="video" />
                <Button icon="file alternate" />
                <Button icon="linkedin" />
                <Button icon="github" />
                <Button icon="c sharp" />
            </Button.Group>
            </Card.Content>
        </Card>
        );
    };
}
