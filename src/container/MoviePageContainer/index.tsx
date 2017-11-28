import * as React from "react";

import MoviePage from "../../stories/screens/MoviePage";

export interface Props {
    navigation: any,
}

export interface State { }

export default class MoviePageContainer extends React.Component<Props, State> {
    render() {
        return <MoviePage navigation={this.props.navigation} movie={this.props.navigation.state.params.movie} />;
    }
}

