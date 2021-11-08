import * as TeaTimeUtil from "../util/tea_time_util";

export const RECEIVE_TEA_TIMES = 'RECEIVE_TEA_TIMES';
export const RECEIVE_TEA_TIME = 'RECEIVE_TEA_TIME';
export const REMOVE_TEA_TIME = 'REMOVE_TEA_TIME';
export const RECEIVE_TEA_TIME_ERRORS = 'RECEIVE_TEA_TIME_ERRORS';
export const REMOVE_TEA_TIME_ERRORS = 'REMOVE_TEA_TIME_ERRORS';


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

const removeTeaTime = (teaTimeId) => {
    return {
        type: REMOVE_TEA_TIME,
        teaTimeId
    }
};

const receiveTeaTimeErrors = errors => ({
    type: RECEIVE_TEA_TIME_ERRORS,
    errors
});

export const removeTeaTimeErrors = () => ({
    type: REMOVE_TEA_TIME_ERRORS
});


export const fetchTeaTimes = () => dispatch => {
    return TeaTimeUtil.fetchTeaTimes()
        .then(teaTimes => dispatch(receiveTeaTimes(teaTimes)),
            errors => dispatch(receiveTeaTimeErrors(errors.responseJSON)))
};

export const fetchTeaTime = (teaTimeId) => dispatch => {
    return TeaTimeUtil.fetchTeaTime(teaTimeId)
        .then(teaTime => dispatch(receiveTeaTime(teaTime)),
            errors => dispatch(receiveTeaTimeErrors(errors.responseJSON)))
};

export const createTeaTime = (teaTime) => dispatch => {
    return TeaTimeUtil.createTeaTime(teaTime)
        .then(() => dispatch(receiveTeaTime(teaTime)),
            errors => dispatch(receiveTeaTimeErrors(errors.responseJSON)))
};

export const updateTeaTime = (teaTime) => dispatch => {
    return TeaTimeUtil.updateTeaTime(teaTime)
        .then(() => dispatch(receiveTeaTime(teaTime)),
            errors => dispatch(receiveTeaTimeErrors(errors.responseJSON)))
};

export const deleteTeaTime = (teaTimeId) => dispatch => {
    return TeaTimeUtil.destroyTeaTime(teaTimeId)
        .then(() => dispatch(removeTeaTime(teaTimeId)),
            errors => dispatch(receiveTeaTimeErrors(errors.responseJSON)))
};