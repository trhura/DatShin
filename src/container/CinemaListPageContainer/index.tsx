import * as React from "react";
import { Icon } from "native-base";

import APIStore from '../../store/APIStore';
import CinemaListPage from "../../stories/screens/CinemaListPage";
import LoadingPage from "../../stories/screens/LoadingPage";

export interface Props {
    navigation: any,
}

export interface State {
    isLoading: boolean;
    cinemaList: any;
}

export default class CinemaListPageContainer extends React.Component<Props, State> {
    static navigationOptions = {
        tabBarLabel: "Cinemas",
        tabBarIcon: ({ }) => (
            <Icon name='home' />
        )
    }

    constructor() {
        super();
        this.state = {
            isLoading: true,
            cinemaList: []
        }
    }

    componentDidMount() {
        this.loadCinemaList();
    }

    async loadCinemaList() {
        let cinemaListByCity = await APIStore.cinemaListByCity();
        this.setState({
            isLoading: false,
            cinemaList: cinemaListByCity
        })
    }

    render() {
        if (this.state.isLoading) {
            return (
                <LoadingPage navigation={this.props.navigation} />
            );
        }

        return <CinemaListPage navigation={this.props.navigation} cinemaList={this.state.cinemaList} />;
    }
}

