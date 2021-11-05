import * as CitiesUtil from "../util/cities_util";

export const RECEIVE_ALL_CITIES = "RECEIVE_ALL_CITIES";


const receiveCities = (cities) => {
    return {
        type: RECEIVE_ALL_CITIES,
        cities
    }
};

export const fetchCities = () => dispatch => {
    return CitiesUtil.fetchCities()
        .then(cities => dispatch(receiveCities(cities)))
};

