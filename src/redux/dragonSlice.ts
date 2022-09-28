import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { fetchAllDragons, getOneDragon} from './dragonsOperations'


const initialState = {
    items: [],
    activeDragon: '',
    isLoading: true,
    error: null,
};

export const dragonsSlice = createSlice({
    name: 'dragons',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchAllDragons.fulfilled.type]: (state: IState, action: any) => {
            state.items = action.payload;
            state.isLoading = false;
            state.error = null;
        },
        [fetchAllDragons.pending.type]: (state: IState) => {
            state.isLoading = true;
            state.error = null;
        },
        [fetchAllDragons.rejected.type]: (state: IState, action: any) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [getOneDragon.fulfilled.type]: (state: IState, action: any) => {
            state.activeDragon = action.payload;
            state.isLoading = false;
            state.error = null;
        },
        [getOneDragon.pending.type]: (state: IState) => {
            state.isLoading = true;
            state.error = null;
        },
        [getOneDragon.rejected.type]: (state: IState, action: any) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

const persistConfig = {
    key: 'dragons',
    storage,
};
export const dragonsReducer = persistReducer(
    persistConfig,
    dragonsSlice.reducer
);

interface IState {
    items: any;
    activeDragon: any;
    isLoading: any;
    error: any;
}

export const getDragons = ({dragons}:{dragons: IState}) => dragons.items;
export const getDragon = ({dragons}:{dragons: IState}) => dragons.activeDragon;
export const getLoading = ({dragons}:{dragons: IState}) => dragons.isLoading;
export const getError = ({dragons}:{dragons: IState}) => dragons.error;

