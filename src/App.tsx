import React from "react";
import { TabNavigator, StackNavigator } from "react-navigation";
import { Root, Icon } from "native-base";

import NowPage from "./container/NowPageContainer";
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
            headerBackTitle: "Back",
        }),
    }
});

const MovieNavigator = StackNavigator({
    MovieList: {
        screen: MovieListPage,
        navigationOptions: {
            title: 'Movies',
        },
    },

    MovieDetail: {
        screen: MoviePage,
        navigationOptions: ({ navigation }) => ({
            title: `${navigation.state.params.movie.movie_title}`,
            headerBackTitle: "Back",
        }),
    }
});

const App = TabNavigator(
    {
        Cinemas: {
            screen: CinemasNavigator,
            navigationOptions: {
                tabBarLabel: "Cinemas",
                tabBarIcon: ({ }) => (<Icon name='md-navigate' />)
            }
        },

        Movies: {
            screen: MovieNavigator,
            navigationOptions: {
                tabBarLabel: "Movies",
                tabBarIcon: ({ }) => (<Icon name='md-images' />)
            }
        },

        Now: {
            screen: NowPage,
            navigationOptions: {
                tabBarLabel: "Now",
                tabBarIcon: ({ }) => (<Icon name='md-time' />)
            }
        },

    },
    {
        tabBarPosition: 'bottom',
        animationEnabled: true,
        swipeEnabled: true,
    }
);

export default () => (
    <Root>
        <App />
    </Root>
);
