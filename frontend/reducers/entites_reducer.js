import { combineReducers } from "redux";
import AttendanceReducer from "./attendances_reducer";
import citiesReducer from "./cities_reducer";
import teaTimesReducer from "./tea_times_reducer";
import usersReducer from "./users_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    teaTimes: teaTimesReducer,
    cities: citiesReducer,
    attendances: AttendanceReducer
});

export default entitiesReducer;