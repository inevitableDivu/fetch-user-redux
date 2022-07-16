export interface UserData {
    total: number;
    totalUser: SingleUser[];
    singleUser?: SingleUser;
    isLoading: boolean;
}

export interface SingleUser {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    avatar: string;
}

export const initialUserState: UserData = {
    total: 0,
    totalUser: [],
    singleUser: undefined,
    isLoading: false
}