import * as types from '../constants/ActionTypes';

export function getUserByFullName(name, lastName, fatherName) {
    return {
        type: types.CHANGE_USERS,
        name,
        lastName,
        fatherName
    };
}