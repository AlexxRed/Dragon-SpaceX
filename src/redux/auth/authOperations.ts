import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IUser } from "../../services/types/user.types";

axios.defaults.baseURL = 'https://delivery-backend-project.herokuapp.com/api';

const token = {
    set(token: string) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
};

const register = createAsyncThunk<IUser>(
    '/auth/users/signup',
    async credentials => {
    try {
        const response = await axios.post('/auth/users/signup', credentials);
        // token.set(response.data.token);
        return response.data;
    } catch (error) {
        console.log(error);
    }
});



const logIn = createAsyncThunk<IUser>(
    '/auth/users/login',
    async (credentials, { rejectWithValue })=> {
    try {
        const { data } = await axios.post('/auth/users/login', credentials);
        token.set(data.token);
        return data;
    } catch (error) {
        console.log(error);
    }
});



const logOut = createAsyncThunk(
    'auth/logout',
    async () => {
    try {
        token.unset();
    } catch (error) {
        console.log(error);
    }
});


export const signup = `https://delivery-backend-project.herokuapp.com/api/auth/users/signup`
export const signin = `https://delivery-backend-project.herokuapp.com/api/auth/users/login`


const operations = {
    register,
    logOut,
    logIn,
};
export default operations;
