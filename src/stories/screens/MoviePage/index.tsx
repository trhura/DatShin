import React from "react";
import { Image } from 'react-native';
import { Container, Card, Right, CardItem, Text, Content, Left } from "native-base";

export interface Props {
    navigation: any;
    movie: any;
}

export interface State { }

class MoviePage extends React.Component<Props, State> {

    render() {
        return (
            <Container>
                <Content>
                    <Card>
                        <CardItem>
                            <Left>
                                {/* <Text>{this.props.movie.movie_title}</Text>
                                    <Badge info><Text>{this.props.movie.movie_info.language}</Text></Badge> */}
                                <Text note>{this.props.movie.movie_info.tagline}</Text>
                            </Left>
                            <Right>
                                <Image
                                    source={{ uri: this.props.movie.poster_url }}
                                    style={{ width: 100, height: 150 }}
                                />
                            </Right>
                        </CardItem>
                    </Card>
                </Content>
            </Container >
        );
    }
}

export default MoviePage; 
