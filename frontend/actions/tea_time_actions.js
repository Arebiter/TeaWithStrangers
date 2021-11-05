import * as TeaTimeUtil from "../util/tea_time_util";

export const RECEIVE_TEA_TIMES = 'RECEIVE_TEA_TIMES';
export const RECEIVE_TEA_TIME = 'RECEIVE_TEA_TIME';


const receiveTeaTimes = (teaTimes) => {
    return {
        type: RECEIVE_TEA_TIMES,
        teaTimes
    }
};

const receiveTeaTime = (teaTime) => {
    return {
        type: RECEIVE_TEA_TIME,
        teaTime
    }
};

export const fetchTeaTimes = () => dispatch => {
    return TeaTimeUtil.fetchTeaTimes()
        .then(teaTimes => dispatch(receiveTeaTimes(teaTimes)))
};

export const fetchTeaTime = (teaTimeId) => dispatch => {
    return TeaTimeUtil.fetchTeaTime(teaTimeId)
        .then(teaTime => dispatch(receiveTeaTime(teaTime)))
};