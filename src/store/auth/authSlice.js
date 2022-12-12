import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'cheking', // 'not-authenticated', 'authenticated'
        uid: null,
        displayName: null,
        photoURL: null,
        errorMessage: null,
    },
    reducers: {
        login: ( state, action ) => {

        },
        logout: ( state, action ) => {

        },
        checkingCredentials: ( state ) => {

        }
    }
});


// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials } = authSlice.actions;