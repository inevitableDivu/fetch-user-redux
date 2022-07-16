import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from './reducers/userReducer';

export const store = configureStore({
    reducer: {
        users: userReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;