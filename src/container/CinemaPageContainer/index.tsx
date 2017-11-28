import * as React from "react";

import CinemaPage from "../../stories/screens/CinemaPage";

export interface Props {
    navigation: any;
}

export interface State { }

export default class CinemaPageContainer extends React.Component<Props, State> {
    render() {
        return <CinemaPage
            navigation={this.props.navigation}
            cinema={this.props.navigation.state.params.cinema}
            movieList={this.props.navigation.state.params.movieList} />;
    }
}

