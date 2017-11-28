import React from "react";
import { Container, Content, Text, List, ListItem, Separator } from "native-base";

export interface Props {
    navigation: any;
    cinemaList: any;
    movieList: any;
}

export interface State { }

class CinemaListPage extends React.Component<Props, State> {
    render() {
        return (
            <Container>
                <Content>
                    {
                        Object.keys(this.props.cinemaList).map((city, i) => {
                            return (
                                <List key={i}>
                                    <Separator><Text>{city}</Text></Separator>
                                    {
                                        this.props.cinemaList[city].map((cinema, j) => (
                                            <ListItem key={j}
                                                onPress={() => this.props.navigation.navigate("CinemaDetail", {
                                                    cinema: cinema,
                                                    movieList: this.props.movieList
                                                })} >
                                                <Text>{cinema.name}</Text>
                                            </ListItem>
                                        ))
                                    }
                                </List>
                            )
                        })
                    }
                </Content>
            </Container >
        );
    }
}

export default CinemaListPage; 
