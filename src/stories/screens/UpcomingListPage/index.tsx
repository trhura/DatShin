import React from "react";
import { View, TouchableHighlight, Image, Dimensions, } from 'react-native';
import { Button, Header, Body, Title, Container, Text, Content } from "native-base";
import DialogManager, { ScaleAnimation, DialogContent } from 'react-native-dialog-component';
import { Col, Row, Grid } from 'react-native-easy-grid';

export interface Props {
    navigation: any;
    movieList: any;
    cinemaList: any;
}

export interface State { }

// FIXME: handle large screen devices
let imgMargin = 2;
let width = Dimensions.get('window').width - (imgMargin * 2);
let imgWidth = (width / 3) - (imgMargin * 2);
let imgHeight = imgWidth * 1.5;

class MovieListPage extends React.Component<Props, State> {
    dialog = null;

    showMovieDetails(movie) {
        DialogManager.show({
            ref: (component) => { this.dialog = component; },
            title: movie.movie_title,
            width: imgWidth * 2.5,
            height: imgHeight * 2.5,
            animationDuration: 200,
            ScaleAnimation: new ScaleAnimation(),
            children: (
                <DialogContent contentStyle={{ flex: 1 }}>
                    <Grid style={{ flex: 1, justifyContent: 'space-between', }}>
                        <Row style={{ flex: -1, padding: 5, borderBottomColor: "#999", borderBottomWidth: 1 }}>
                            <Text>Movie Info </Text>
                        </Row>
                        <Row style={{ flex: -1, padding: 5, borderBottomColor: "#999", borderBottomWidth: 1 }}>
                            <Col><Text style={{ color: "black" }} note>Language:</Text></Col>
                            <Col><Text note>{movie.movie_info.language}</Text></Col>
                        </Row>
                        <Row style={{ flex: -1, padding: 5, borderBottomColor: "#999", borderBottomWidth: 1 }}>
                            <Col><Text style={{ color: "black" }} note>Subtitle:</Text></Col>
                            <Col><Text note>{movie.movie_info.subtitle}</Text></Col>
                        </Row>
                        <Row style={{ flex: -1, padding: 5, borderBottomColor: "#999", borderBottomWidth: 1 }}>
                            <Col><Text style={{ color: "black" }} note>Genre:</Text></Col>
                            <Col><Text note>{movie.movie_info.genre.join(",")}</Text></Col>
                        </Row>
                        <Row style={{ flex: -1, padding: 5, borderBottomColor: "#999", borderBottomWidth: 1 }}>
                            <Col><Text style={{ color: "black" }} note>Certification:</Text></Col>
                            <Col><Text note>{movie.movie_info.certification}</Text></Col>
                        </Row>
                        <Row style={{ flex: -1, padding: 5, borderBottomColor: "#999", borderBottomWidth: 1 }}>
                            <Col><Text style={{ color: "black" }} note>Runtime:</Text></Col>
                            <Col><Text note>{movie.movie_info.runtime} min</Text></Col>
                        </Row>
                        <Row style={{ flex: -1, padding: 5, borderBottomColor: "#999", borderBottomWidth: 1 }}>
                            <Col><Text style={{ color: "black" }} note>Director:</Text></Col>
                            <Col><Text note>{movie.movie_info.director}</Text></Col>
                        </Row>
                        <Row style={{ flex: -1, padding: 5, borderBottomColor: "#999", borderBottomWidth: 0 }}>
                            <Col><Text style={{ color: "black" }} note>Cast:</Text></Col>
                            <Col><Text note>{movie.movie_info.cast.join(",")}</Text></Col>
                        </Row>
                        <Row style={{ flex: 0, padding: 5, justifyContent: "flex-end" }}>
                            <Button onPress={() => this.dialog.dismiss()} ><Text>Close</Text></Button>
                        </Row>
                    </Grid>
                </DialogContent>
            ),
        }, () => { });
    }

    render() {
        return (
            <Container>
                <Header><Body><Title>Coming Soon</Title></Body></Header>
                <Content>
                    <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', margin: imgMargin }}>
                        {
                            this.props.movieList.map((movie, index) => (
                                <TouchableHighlight key={index}
                                    onPress={() => this.showMovieDetails(movie)}>
                                    <Image
                                        source={{ uri: movie.poster_url }}
                                        style={{ width: imgWidth, height: imgHeight, margin: imgMargin }} />
                                </TouchableHighlight>
                            ))
                        }
                    </View>
                </Content>
            </Container >
        );
    }
}

export default MovieListPage;
