import { configureStore } from "@reduxjs/toolkit";
import searchReducer from './createSlice/serchSlice'
import fetchApiReducer from './createSlice/fetchapiSlice'
export const store=configureStore({
    reducer:{
        searchText:searchReducer,
        fetchApi:fetchApiReducer
    }
})