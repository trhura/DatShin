import React from "react";
import { TouchableHighlight, Image } from 'react-native';
import { Container, Content, View } from "native-base";

export interface Props {
    navigation: any;
    movieList: any;
    cinemaList: any;
}

export interface State { }

class MovieListPage extends React.Component<Props, State> {
    render() {
        return (
            <Container>
                <Content>
                    <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
                        {
                            this.props.movieList.map((movie, index) => (
                                <TouchableHighlight key={index}
                                    onPress={() => this.props.navigation.navigate("MovieDetail", {
                                        movie: movie,
                                        cinemaList: this.props.cinemaList,
                                    })}>
                                    <Image
                                        source={{ uri: movie.poster_url }}
                                        style={{ width: 120, height: 180 }}
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
