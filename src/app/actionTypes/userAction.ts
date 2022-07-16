import { SingleUser, UserData } from "../state/initialUserState";

import axios from 'axios'
import { Dispatch } from "@reduxjs/toolkit";

export enum UserAction {
    ALLUSERS = "GET_ALL_USERS",
    SINGLEUSER = "GET_USER_BY_ID",
    LOADING = "LOADING"
}

interface AllUserAction {
    type: UserAction.ALLUSERS,
    payload: {
        total: number;
        totalUser: SingleUser[];
    }
}

interface SingleUserAction {
    type: UserAction.SINGLEUSER;
    payload: SingleUser;
}

interface LoadingAction {
    type: UserAction.LOADING;
    payload: boolean;
}

export type Actions = AllUserAction | SingleUserAction | LoadingAction;

export async function getAllUsers(dispatch: Dispatch<Actions>, state: UserData) {
    dispatch({ type: UserAction.LOADING, payload: true })
    await axios.get('https://reqres.in/api/users?per_page=12').then((response) => {
        dispatch({ type: UserAction.ALLUSERS, payload: { ...state, total: response.data.total, totalUser: response.data.data, isLoading: false } })
    }).catch((error) => {
        console.log(error)
    })
}

export async function getUserById(dispatch: Dispatch<Actions>, data: number = 1) {
    dispatch({ type: UserAction.LOADING, payload: true })
    await axios.get(`https://reqres.in/api/users/${data}`).then((response) => {
        dispatch({ type: UserAction.SINGLEUSER, payload: response.data.data })
    }).catch((error) => {
        console.log(error)
    })
}