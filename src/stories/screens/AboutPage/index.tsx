import * as React from "react";
import { Image, View, Dimensions } from "react-native";
import { Container, Text, Content, Header, Body, Title } from "native-base";

export interface Props {
    navigation: any;
}

export interface State { }

let width = Dimensions.get('window').width;

class LoadingPage extends React.Component<Props, State> {
    render() {
        return (
            <Container>
                <Header><Body><Title>Datshin App</Title></Body></Header>
                <Content contentContainerStyle={{ justifyContent: "center", flex: 1, margin: 30, flexDirection: 'column', alignItems: "center" }}>
                    <Image source={require('../../../../assets/arpalar.jpg')} style={{ width: 120, height: 120 }} />
                    <Text style={{ margin: 15 }} note>© 2017 ArpalarTech</Text>
                    <View style={{ borderBottomColor: "gray", borderBottomWidth: 1, margin: 10, width: (width - 60) }} />
                    <Text style={{ margin: 15 }}>DatShin - second fastest way to find out movies, show times and cinemas.</Text>
                </Content>
            </Container >
        );
    }
}

export default LoadingPage;
