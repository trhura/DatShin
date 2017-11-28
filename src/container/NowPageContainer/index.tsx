import * as React from "react";
import { Text } from "native-base";

export interface Props {
    navigation: any,
}

export interface State { }

export default class NowPageContainer extends React.Component<Props, State> {
    render() {
        return <Text>Now</Text>
    }
}
