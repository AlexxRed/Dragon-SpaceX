import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllDragons = createAsyncThunk<any, void, {}>(
    'dragons/getAllDragons',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(`https://api.spacexdata.com/v4/dragons`)
            console.log(response);
            return response.data

        } catch (error) {
            return rejectWithValue(error)
        }
    }
);

export const getOneDragon = createAsyncThunk<any, void, {}>(
    'dragons/getOneDragon',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(`https://api.spacexdata.com/v4/dragons/5e9d058759b1ff74a7ad5f8f`)
            return response.data

        } catch (error) {
            return rejectWithValue(error)
        }
    }
);

