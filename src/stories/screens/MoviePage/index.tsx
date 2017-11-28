import React from "react";
import { Image } from 'react-native';
import { Container, Badge, Card, Right, CardItem, Text, Content } from "native-base";
import { Col, Row, Grid } from 'react-native-easy-grid';

export interface Props {
    navigation: any;
    movie: any;
    cinemaList: any;
}

export interface State { }

class MoviePage extends React.Component<Props, State> {
    render() {
        return (
            <Container>
                <Content padder>
                    <Grid>
                        <Row>
                            <Col>
                                <Row style={{ flexWrap: 'wrap' }}>
                                    <Badge warning><Text>{this.props.movie.movie_info.language}</Text></Badge>
                                    {
                                        this.props.movie.movie_info.genre.map((genre, index) => (
                                            <Badge key={index} info><Text>{genre}</Text></Badge>
                                        ))

                                    }
                                </Row>
                                <Row>
                                    <Text note>{this.props.movie.movie_info.tagline}</Text>
                                </Row>
                            </Col>
                            <Right>
                                <Col>
                                    <Image
                                        source={{ uri: this.props.movie.poster_url }}
                                        style={{ width: 150, height: 225 }} />
                                </Col>
                            </Right>
                        </Row>
                        <Row>
                            <Card>
                                {
                                    this.props.movie.movie_info.show_times.map((show, index) => (
                                        <CardItem key={index} style={{ alignItems: 'stretch' }}>
                                            <Col>
                                                <Text>{this.props.cinemaList[show.cinema_code].name}</Text>
                                                <Badge info>
                                                    <Text>{this.props.cinemaList[show.cinema_code].city}</Text>
                                                </Badge>
                                                <Text note>{show.times.join("-")}</Text>
                                            </Col>
                                        </CardItem>
                                    ))
                                }
                            </Card>
                        </Row>
                    </Grid>
                </Content>
            </Container >
        );
    }
}

export default MoviePage; 
