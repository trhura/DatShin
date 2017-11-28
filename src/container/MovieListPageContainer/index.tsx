import * as React from "react";

import APIStore from '../../store/APIStore';
import MovieListPage from "../../stories/screens/MovieListPage";
import LoadingPage from "../../stories/screens/LoadingPage";

export interface Props {
    navigation: any,
}

export interface State {
    isLoading: boolean;
    movieList: any;
    cinemaList: any;
}

export default class MovieListPageContainer extends React.Component<Props, State> {
    constructor() {
        super();
        this.state = {
            isLoading: true,
            movieList: [],
            cinemaList: []
        }
    }

    componentDidMount() {
        this.loadMovieList();
    }

    async loadMovieList() {
        let movieList = await APIStore.movieList();
        let cinemaList = await APIStore.cinemaListByCode();

        this.setState({
            isLoading: false,
            movieList: movieList,
            cinemaList: cinemaList
        })
    }

    render() {
        if (this.state.isLoading) {
            return (
                <LoadingPage navigation={this.props.navigation} />
            );
        }

        return <MovieListPage navigation={this.props.navigation}
            movieList={this.state.movieList}
            cinemaList={this.state.cinemaList} />;
    }
}

