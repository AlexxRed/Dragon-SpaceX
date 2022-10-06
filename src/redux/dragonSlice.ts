import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { IDragon } from '../services/types/dragon.types';
import { fetchAllDragons, getOneDragon} from './dragonsOperations'


const initialState = {
    items: [],
    activeDragon: undefined,
    gallery: [],
    isLoading: true,
    error: null,
};

export const dragonsSlice = createSlice({
    name: 'dragons',
    initialState,
    reducers: {
        setActiveDragon(state: IState, action: PayloadAction<string>) {
            state.activeDragon = state.items.find((item: any) => item.id === action.payload);
        },
        setGallery(state: IState) {
            state.items.forEach(
                ({ flickr_images }: { flickr_images: [] }) => flickr_images.map((item: string ) => state.gallery.push(item)))
        }
    },
    extraReducers: {
        [fetchAllDragons.fulfilled.type]: (state: IState, action: PayloadAction) => {
            state.items = action.payload;
            state.isLoading = false;
            state.error = null;
        },
        [fetchAllDragons.pending.type]: (state: IState) => {
            state.isLoading = true;
            state.error = null;
        },
        [fetchAllDragons.rejected.type]: (state: IState, action: PayloadAction) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [getOneDragon.fulfilled.type]: (state: IState, action: PayloadAction) => {
            state.activeDragon = action.payload;
            state.isLoading = false;
            state.error = null;
        },
        [getOneDragon.pending.type]: (state: IState) => {
            state.isLoading = true;
            state.error = null;
        },
        [getOneDragon.rejected.type]: (state: IState, action: PayloadAction) => {
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
    items: IDragon[]| any;
    activeDragon: IDragon| any|undefined|null;
    isLoading: boolean;
    error: any;
    gallery: [string]| any;
}

export const { setGallery } = dragonsSlice.actions;
export const { setActiveDragon } = dragonsSlice.actions;

export const getGallery = ({dragons}:{dragons: IState}) => dragons.gallery;
export const getDragons = ({dragons}:{dragons: IState}) => dragons.items;
export const getActiveDragon = ({dragons}:{dragons: IState}) => dragons.activeDragon;
export const getLoading = ({dragons}:{dragons: IState}) => dragons.isLoading;
export const getError = ({dragons}:{dragons: IState}) => dragons.error;

