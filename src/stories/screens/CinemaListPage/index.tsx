import React from "react";
import { Container, Content, Text, List, ListItem } from "native-base";

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
                                <List key={i} style={{ backgroundColor: '#fcfcfc' }}>
                                    <ListItem
                                        style={{ width: '100%', marginLeft: 0, paddingLeft: 15 }}
                                        itemDivider>
                                        <Text style={{ fontWeight: "bold" }}>{city}</Text>
                                    </ListItem>
                                    {
                                        this.props.cinemaList[city].map((cinema, i) => (
                                            <ListItem key={i}
                                                style={{ width: '100%', marginLeft: 0, paddingLeft: 20 }}
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
