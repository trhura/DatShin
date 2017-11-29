import React from "react";
import { Image } from 'react-native';
import { Container, ActionSheet, Card, Right, Icon, Text, Content } from "native-base";
import { Col, Row, Grid } from 'react-native-easy-grid';
import Communications from 'react-native-communications';

export interface Props {
    navigation: any;
    cinemaList: any;
    movie: any;
}

export interface State { }

class MoviePage extends React.Component<Props, State> {
    call(cinema, phone) {
        let options = phone.split("^");
        options.push("Cancel");

        ActionSheet.show(
            {
                options: options,
                cancelButtonIndex: options.length - 1,
                title: "Call " + cinema,
            },
            itemIndex => {
                if (itemIndex && itemIndex < (options.length - 1))
                    Communications.phonecall(options[itemIndex], true);
            }
        );
    }

    render() {
        return (
            <Container>
                <Content padder>
                    <Card style={{ height: 190 }}>
                        <Grid style={{ margin: 5 }}>
                            <Col style={{ left: 5 }}>
                                <Row style={{ flex: -1, padding: 5 }}><Text>{this.props.movie.movie_title}</Text></Row>
                                <Row style={{ padding: 5 }} >
                                    <Text ellipsizeMode='tail' numberOfLines={7} note> {this.props.movie.movie_info.tagline}</Text>
                                </Row>
                            </Col>

                            <Right>
                                <Col>
                                    <Image
                                        source={{ uri: this.props.movie.poster_url }}
                                        style={{ width: 120, height: 180 }} />
                                </Col>
                            </Right>
                        </Grid>
                    </Card>

                    {
                        this.props.movie.movie_info.show_times.map((show, index) => (
                            <Card key={index}>
                                <Grid style={{ margin: 10 }}>
                                    <Col>
                                        <Row ><Text>{this.props.cinemaList[show.cinema_code].name}</Text></Row>
                                        <Row><Text style={{ fontSize: 12 }} note>{show.times.join(" ")}</Text></Row>
                                    </Col>
                                    <Right style={{ flex: -1, margin: 10 }}>
                                        <Col style={{ justifyContent: 'center', alignContent: 'center' }}>
                                            <Icon name='call'
                                                fontSize={45}
                                                onPress={() => this.call(
                                                    this.props.cinemaList[show.cinema_code].name,
                                                    this.props.cinemaList[show.cinema_code].phone
                                                )}
                                            />
                                        </Col>
                                    </Right>
                                </Grid>

                            </Card>
                        ))
                    }


                </Content >
            </Container >
        );
    }
}

export default MoviePage; 
