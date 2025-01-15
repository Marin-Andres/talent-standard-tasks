import React from 'react';
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types'
import { Card, Grid, Button, Image, Popup, Icon, ButtonGroup } from 'semantic-ui-react'

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
                    url={null}
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
                        src="/images/image.png"
                        
                    />
                </Grid.Column>
                <Grid.Column width={8}>
                    <Card>
                        <Card.Header>Talent snapshot</Card.Header>
                        <Card.Description>
                            <label>CURRENT EMPLOYER</label>
                            <p>ABC</p>
                            <label>VISA STATUS</label>
                            <p>Citizen</p>
                            <label>POSITION</label>
                            <p>Software Developer</p>
                        </Card.Description>
                    </Card>
                </Grid.Column>
            </Grid.Row>
        );            
        return (
        <Card fluid>
            <Card.Header>
                <Grid>
                    <Grid.Row columns={2}>
                        <Grid.Column width={12}>
                            <h5>Ru (Talent) Ng</h5>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Icon name="star outline" style={{ float: "right" }} />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
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
            </Card.Content>
            <Card.Content extra>
                <ButtonGroup>
                    <Button basic color='blue'>C#</Button>
                </ButtonGroup>
            </Card.Content>
        </Card>
        );
    };
}
