import React from 'react';
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types'
import { Card, Grid, Button, Image, Popup, Icon } from 'semantic-ui-react'

export default class TalentCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showVideo: true
        };
       this.showVideo = this.showVideo.bind(this);
       this.showTalentSnapshot = this.showTalentSnapshot.bind(this);
    };

    showVideo() {
        this.setState({ showVideo: true });
    };

    showTalentSnapshot() {
        this.setState({ showVideo: false });
    };
    
    render() {
        const { showVideo } = this.state;
        const switchButton = showVideo ? (
            <Button icon="user" onClick={this.showTalentSnapshot} />
        ) : (
            <Button icon="video" onClick={this.showVideo} />
        );
        const cardContentRow = showVideo ? (
            <Grid.Row columns={1}>
                <ReactPlayer
                    url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                    playing={true}
                    controls={true}
                    width='100%'
                    height='100%'
                />
            </Grid.Row>
        ) : (
            <Grid.Row columns={2}>
                <Grid.Column width={8}>
                    <Image
                        src="https://via.placeholder.com/150"
                        size="tiny"
                        circular
                        style={{ marginTop: "5px" }}
                    />
                </Grid.Column>
                <Grid.Column width={8}>
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
        );            
        return (
        <Card fluid>
            <Card.Header>
                Ru (Talent) Ng
                <Icon name="star outline" style={{ float: "right" }} />
            </Card.Header>
            <Card.Content>
            <Grid>
                {cardContentRow}
            </Grid>
            </Card.Content>
            <Card.Content extra>
            <Button.Group fluid>
                {switchButton}
                <Button icon="file pdf outline" />
                <Button icon="linkedin" />
                <Button icon="github" />
            </Button.Group>
            <p>C#</p>
            </Card.Content>
        </Card>
        );
    };
}
