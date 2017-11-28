import axios from 'axios';

namespace APIStore {
    let _cinemaList = [];
    let _movieList = [];
    let _cinemaListByCity = {};
    let AUTH_TOKEN = "eTB0M3NoMW5jbDEzbnQweDEyNDpXYzcyY2dqLTk3YXA4Yypr";
    let client = axios.create({
        baseURL: 'http://appapi.yoteshinapp.com/api',
        timeout: 3000,
        headers: { 'Authorization': 'Basic ' + AUTH_TOKEN }
    });

    export async function movieList() {
        if (_movieList.length > 0) return movieList;

        let response = await client.get('/schedules?status=showing');
        _movieList = response.data;
        return _movieList;
    }

    export async function cinemaList() {
        if (_cinemaList.length > 0) return cinemaList;

        let response = await client.get('/cinemas?font_name=zawgyi');
        _cinemaList = response.data;
        return _cinemaList;
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
}

export default APIStore;
