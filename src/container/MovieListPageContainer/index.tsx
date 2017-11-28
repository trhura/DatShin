import * as React from "react";
import { Icon } from "native-base";

import APIStore from '../../store/APIStore';
import MovieListPage from "../../stories/screens/MovieListPage";
import LoadingPage from "../../stories/screens/LoadingPage";

export interface Props {
    navigation: any,
}

export interface State {
    isLoading: boolean;
    movieList: any;
}

export default class MovieListPageContainer extends React.Component<Props, State> {
    static navigationOptions = {
        tabBarLabel: "Movies",
        tabBarIcon: ({ }) => (
            <Icon name='home' />
        )
    }

    constructor() {
        super();
        this.state = {
            isLoading: true,
            movieList: []
        }
    }

    componentDidMount() {
        this.loadMovieList();
    }

    async loadMovieList() {
        let movieList = await APIStore.movieList();
        this.setState({
            isLoading: false,
            movieList: movieList
        })
    }

    render() {
        if (this.state.isLoading) {
            return (
                <LoadingPage navigation={this.props.navigation} />
            );
        }

        return <MovieListPage navigation={this.props.navigation} movieList={this.state.movieList} />;
    }
}

