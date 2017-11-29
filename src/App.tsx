import React from "react";
import { TabNavigator, StackNavigator } from "react-navigation";
import { Root, Icon } from "native-base";

import AboutPage from "./container/AboutPageContainer";
import UpcomingPage from "./container/UpcomingPageContainer";
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


const ShowingNavigator = StackNavigator({
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
            screen: ShowingNavigator,
            navigationOptions: {
                tabBarLabel: "Showing",
                tabBarIcon: ({ tintColor }) => {
                    if (tintColor === TINTCOLOR) return (<Icon name='film' android="md-film" active={true} />)
                    else return (<Icon name='film' android="md-film" />)
                }
            }
        },

        Upcoming: {
            screen: UpcomingPage,
            navigationOptions: {
                tabBarLabel: "Upcoming",
                tabBarIcon: ({ tintColor }) => {
                    if (tintColor === TINTCOLOR) return (<Icon name='calendar' android="md-calendar" active={true} />)
                    else return (<Icon name='calendar' android="md-calendar" />)
                }
            }
        },

        Cinemas: {
            screen: CinemasNavigator,
            navigationOptions: {
                tabBarLabel: "Cinemas",
                tabBarIcon: ({ tintColor }) => {
                    if (tintColor === TINTCOLOR) return (<Icon name='podium' android="md-podium" active={true} />)
                    else return (<Icon name='podium' android="md-podium" />)
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
