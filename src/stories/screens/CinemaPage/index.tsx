import React from "react";
import { Image } from 'react-native';
import { Right, Container, Body, Card, CardItem, Icon, Text, Content, } from "native-base";
import { Col, Row, Grid } from 'react-native-easy-grid';
import Communications from 'react-native-communications';

export interface Props {
    navigation: any;
    cinema: any;
    movieList: any;
}

export interface State { }

class CinemaPage extends React.Component<Props, State> {
    render() {
        return (
            <Container>
                <Content padder>
                    <Card>
                        <CardItem header>
                            <Text>{this.props.cinema.name}</Text>
                        </CardItem>
                        <CardItem>
                            <Body><Text note>{this.props.cinema.address}, {this.props.cinema.city}</Text></Body>
                        </CardItem>
                        {
                            this.props.cinema.phone.split("^").map((phone, i) => (
                                <CardItem key={i} button onPress={() => Communications.phonecall(phone, true)}>
                                    <Icon active name="call" />
                                    <Text>{phone}</Text>
                                </CardItem>
                            ))

                        }
                    </Card>

                    {
                        this.props.movieList[this.props.cinema.cinema_code].map((movie, index) => (
                            <Card key={index} style={{ height: 190 }}>
                                <Grid style={{ margin: 5 }}>
                                    <Col style={{ left: 5 }}>
                                        <Row style={{ flex: -1, marginBottom: 10 }}><Text>{movie.movie_title}</Text></Row>
                                        <Row>
                                            <Text numberOfLines={7} note> {movie.movie_info.tagline}</Text>
                                        </Row>
                                    </Col>
                                    <Right>
                                        <Col>
                                            <Image
                                                source={{ uri: movie.poster_url }}
                                                style={{ width: 120, height: 180 }} />
                                        </Col>
                                    </Right>
                                </Grid>
                            </Card>
                        ))
                    }

                </Content>
            </Container >
        );
    }
}

export default CinemaPage; 
