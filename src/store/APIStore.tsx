import axios from 'axios';

namespace APIStore {
    let _cinemaList = [];
    let _movieList = [];
    let _upcomingMovieList = [];
    let _movieListByCinema = [];
    let _cinemaListByCity = {};
    let _cinemaListByCode = {};
    let AUTH_TOKEN = "eTB0M3NoMW5jbDEzbnQweDEyNDpXYzcyY2dqLTk3YXA4Yypr";
    let client = axios.create({
        baseURL: 'http://appapi.yoteshinapp.com/api',
        timeout: 5000,
        headers: { 'Authorization': 'Basic ' + AUTH_TOKEN }
    });

    export async function movieList() {
        if (_movieList.length > 0) return movieList;

        let response = await client.get('/schedules?status=showing');
        _movieList = response.data;
        return _movieList;
    }

    export async function upcomingMovieList() {
        if (_upcomingMovieList.length > 0) return _upcomingMovieList;

        let response = await client.get('/schedules?status=upcoming');
        _upcomingMovieList = response.data;
        return _upcomingMovieList;
    }

    export async function cinemaList() {
        if (_cinemaList.length > 0) return cinemaList;

        let response = await client.get('/cinemas?font_name=zawgyi');
        _cinemaList = response.data;
        return _cinemaList;
    }

    export async function movieListByCinema() {
        if (Object.keys(_movieListByCinema).length > 0) return _movieListByCinema;

        await movieList();
        _movieList.forEach((movie) => {
            movie.movie_info.show_times.forEach((show) => {
                if (show.cinema_code in _movieListByCinema == false) {
                    _movieListByCinema[show.cinema_code] = [];
                }
                _movieListByCinema[show.cinema_code].push(movie);
            })
        });

        return _movieListByCinema;
    }

    export async function cinemaListByCity() {
        if (Object.keys(_cinemaListByCity).length > 0) return _cinemaListByCity;

        await cinemaList();
        _cinemaList.forEach((cinema) => {
            var city = cinema.city;
            if (city in _cinemaListByCity == false) {
                _cinemaListByCity[city] = [];
            }
            _cinemaListByCity[city].push(cinema);
        });
        return _cinemaListByCity;
    }

    export async function cinemaListByCode() {
        if (Object.keys(_cinemaListByCode).length > 0) return _cinemaListByCode;

        await cinemaList();
        _cinemaList.forEach((cinema) => {
            var code = cinema.cinema_code;
            _cinemaListByCode[code] = cinema;
        });

        return _cinemaListByCode;
    }
}

export default APIStore;
