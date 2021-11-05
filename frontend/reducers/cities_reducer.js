import { RECEIVE_ALL_CITIES } from "../actions/cities_actions";

const citiesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = { ...oldState };

    switch (action.type) {
        case RECEIVE_ALL_CITIES:
            return action.cities
        default:
            return oldState;
    }
};

export default citiesReducer;