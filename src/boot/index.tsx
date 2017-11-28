import * as Expo from "expo";
import * as React from "react";
import { StyleProvider } from "native-base";

import App from "../App";
import getTheme from "../theme/components";
import variables from "../theme/variables/platform";

export interface Props { }
export interface State {
    isReady: boolean;
}

export default function() {
    return class Setup extends React.Component<Props, State> {
        state: {
            isReady: boolean;
        };

        constructor() {
            super();
            this.state = {
                isReady: false,
            };
        }

        componentWillMount() {
            this.loadFonts();
        }

        async loadFonts() {
            await Expo.Font.loadAsync({
                Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
            });

            this.setState({ isReady: true });
        }

        render() {
            if (!this.state.isReady) {
                return <Expo.AppLoading />;
            }

            return (
                <StyleProvider style={getTheme(variables)}>
                    <App />
                </StyleProvider>
            );
        }
    };
} 
