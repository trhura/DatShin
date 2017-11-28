import * as React from "react";
import { Container, Content, Spinner } from "native-base";

export interface Props {
    navigation: any;
}

export interface State { }

class LoadingPage extends React.Component<Props, State> {
    render() {
        return (
            <Container>
                <Content contentContainerStyle={{ justifyContent: "center", flex: 1, flexDirection: 'column' }}>
                    <Spinner />
                </Content>
            </Container>
        );
    }
}

export default LoadingPage;
