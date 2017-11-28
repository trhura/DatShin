import React from "react";
import { Container, Body, Card, CardItem, Icon, Text, Content, } from "native-base";
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
                <Content>
                    <Card>
                        <CardItem header><Text>{this.props.cinema.name}</Text></CardItem>
                        <CardItem><Body><Text note>{this.props.cinema.address}</Text></Body></CardItem>
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
                            <Card key={index}>
                                <CardItem header><Text>{movie.movie_title}</Text></CardItem>
                            </Card>
                        ))
                    }

                </Content>
            </Container >
        );
    }
}

export default CinemaPage; 
