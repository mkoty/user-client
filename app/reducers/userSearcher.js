import * as types from '../constants/ActionTypes';
import http from '../services/http'

const initialState = {
    users: http.getUsersByFullName('', '', '')
};

export default function users(state = initialState, action) {
    switch (action.type) {

        case types.CHANGE_USERS:
            const usersPromise = http
                .getUsersByFullName(action.name, action.lastName, action.fatherName);

            const isEmptyRequest = action.name === "" && action.lastName === "" && action.fatherName === "";
            
            return {
                ...state,
                users: usersPromise,
                isEmptyRequest
            };

        default:
            return {
                ...state,
                isEmptyRequest: true
            };
    }
}
