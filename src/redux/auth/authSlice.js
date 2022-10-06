import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import operations from './authOperations';
import { persistReducer } from 'redux-persist';


const initialState = {
    user: {
        name: null,
        email: null
    },
    token: null,
    isLoggedIn: false,
    };

    const authSlice = createSlice({
        name: 'auth',
        initialState,
        extraReducers: {
            [operations.register.fulfilled](state, action) {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            },
            [operations.logIn.fulfilled](state, action) {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            },
            [operations.logOut.fulfilled](state, action) {
                state.user = { name: null, email: null };
                state.token = null;
                state.isLoggedIn = false;
            },
        },
        reducers: {}
    });

    const persistConfig = {
    key: 'auth',
    storage,
};
export const authReducer = persistReducer(
    persistConfig,
    authSlice.reducer
);


// export default authSlice.reducer;
