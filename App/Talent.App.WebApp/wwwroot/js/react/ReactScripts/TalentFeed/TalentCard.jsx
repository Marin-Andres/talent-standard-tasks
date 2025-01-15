import React from 'react';
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types'
import { Form, Card, Grid, Button, Image, Popup, Icon, ButtonGroup } from 'semantic-ui-react'

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
            <Button basic icon="user" onClick={this.showTalentSnapshot} />
        ) : (
            <Button basic icon="video" onClick={this.showVideo} />
        );
        const talentVideoUrl = null;
        const videoObj = talentVideoUrl ? (
            <ReactPlayer
                url={talentVideoUrl}
                playing={false}
                controls={true}
                width='100%'
                height='100%'
                fluid={true}
            />
         ) : (
            <Image 
                src="/images/video_placeholder.png" 
                fluid
            />
         );
        const cardContentRow = showVideo ? (
            <div>
                {videoObj}
            </div>
        ) : (
            <Grid>
                <Grid.Row columns={2}>
                    <Grid.Column width={8}>
                        <Image
                            src="/images/avatar/small/elliot.jpg"
                            fluid
                        />
                    </Grid.Column>
                    <Grid.Column width={8}>
                    <Card>
                        <Card.Content>
                            <Card.Header>Talent snapshot</Card.Header>
                            <Card.Description>
                            <Form>
                                <Form.Field>
                                    <label>CURRENT EMPLOYER</label>
                                    <p>ABC</p>
                                </Form.Field>
                                <Form.Field>
                                    <label>VISA STATUS</label>
                                    <p>Citizen</p>
                                </Form.Field>
                                <Form.Field>
                                    <label>POSITION</label>
                                    <p>Software Developer</p>
                                </Form.Field>
                            </Form>
                            </Card.Description>
                        </Card.Content>
                        </Card>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );            
        return (
        <Card fluid>
            <Card.Header>
                    Ru (Talent) Ng
                    <Icon name="star outline" style={{ float: "right" }} />
            </Card.Header>
            <Card.Content>
                {cardContentRow}
            </Card.Content>
            <Card.Content extra>
                <Button.Group fluid>
                    {switchButton}
                    <Button basic icon="file pdf outline" />
                    <Button basic icon="linkedin" />
                    <Button basic icon="github" />
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
