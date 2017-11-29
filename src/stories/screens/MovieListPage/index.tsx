import React from "react";
import { Dimensions } from 'react-native';
import { TouchableHighlight, Image } from 'react-native';
import { Container, Content, View } from "native-base";

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
    render() {
        return (
            <Container>
                <Content>
                    <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', margin: imgMargin }}>
                        {
                            this.props.movieList.map((movie, index) => (
                                <TouchableHighlight key={index}
                                    onPress={() => this.props.navigation.navigate("MovieDetail", {
                                        movie: movie,
                                        cinemaList: this.props.cinemaList,
                                    })}>
                                    <Image
                                        source={{ uri: movie.poster_url }}
                                        style={{ width: imgWidth, height: imgHeight, margin: imgMargin }}
                                    />
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
