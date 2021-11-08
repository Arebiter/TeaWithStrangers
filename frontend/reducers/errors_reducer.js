import { combineReducers } from "redux";

import sessionErrorsReducer from "./session_errors_reducer";
import teaTimeErrorsReducer from "./tea_time_errors_reducer";

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    teaTime: teaTimeErrorsReducer
});

export default errorsReducer;