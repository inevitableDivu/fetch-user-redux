import { Actions, UserAction } from "../actionTypes/userAction";
import { initialUserState, UserData } from "../state/initialUserState";

import { AnyAction } from "@reduxjs/toolkit";

export const userReducer = (state = initialUserState, action: AnyAction) => {
    switch (action.type) {
        case UserAction.ALLUSERS:
            return ({ ...state, ...action.payload })
        case UserAction.SINGLEUSER:
            return ({ ...state, singleUser: action.payload, isLoading: false });
        case UserAction.LOADING:
            return ({ ...state, isLoading: action.payload })
        default:
            return state;
    }
}