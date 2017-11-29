import React from "react";
import { TabNavigator, StackNavigator } from "react-navigation";
import { Root, Icon } from "native-base";

import AboutPage from "./container/AboutPageContainer";
import MovieListPage from "./container/MovieListPageContainer";
import MoviePage from "./container/MoviePageContainer";
import CinemaListPage from "./container/CinemaListPageContainer";
import CinemaPage from "./container/CinemaPageContainer";

const CinemasNavigator = StackNavigator({
    CinemaList: {
        screen: CinemaListPage,
        navigationOptions: {
            title: 'Cinemas',
        },
    },

    CinemaDetail: {
        screen: CinemaPage,
        navigationOptions: ({ navigation }) => ({
            title: `${navigation.state.params.cinema.name}`,
        }),
    }
});

const MovieNavigator = StackNavigator({
    MovieList: {
        screen: MovieListPage,
        navigationOptions: {
            title: 'Currently Showing',
        },
    },

    MovieDetail: {
        screen: MoviePage,
        navigationOptions: ({ navigation }) => ({
            title: `${navigation.state.params.movie.movie_title}`,
        }),
    }
});

const TINTCOLOR = "#000";
const App = TabNavigator(
    {
        Showing: {
            screen: MovieNavigator,
            navigationOptions: {
                tabBarLabel: "Showing",
                tabBarIcon: ({ tintColor }) => {
                    if (tintColor === TINTCOLOR) return (<Icon name='images' android="md-images" active={true} />)
                    else return (<Icon name='images' android="md-images" />)
                }
            }
        },

        Cinemas: {
            screen: CinemasNavigator,
            navigationOptions: {
                tabBarLabel: "Cinemas",
                tabBarIcon: ({ tintColor }) => {
                    if (tintColor === TINTCOLOR) return (<Icon name='compass' android="md-compass" active={true} />)
                    else return (<Icon name='compass' android="md-compass" />)
                }
            }
        },
        About: {
            screen: AboutPage,
            navigationOptions: {
                tabBarLabel: "About",
                tabBarIcon: ({ tintColor }) => {
                    if (tintColor === TINTCOLOR) return (<Icon name='help-circle' android="md-help-circle" active={true} />)
                    else return (<Icon name='help-circle' android="md-help-circle" />)
                }
            }
        },
    },
    {
        tabBarPosition: 'bottom',
        animationEnabled: true,
        swipeEnabled: true,
        tabBarOptions: {
            activeTintColor: TINTCOLOR
        }
    }
);

export default () => (
    <Root>
        <App />
    </Root>
);
