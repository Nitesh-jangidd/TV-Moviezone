import { createSlice } from "@reduxjs/toolkit";

const initialState={
    apiData:[]
}
const apiSlice=createSlice({
    name:'fetchApi',
    initialState,
    reducers:{
        setApiData:(state,action)=>{
            state.apiData=action.payload
        }
    }
})
export const {setApiData}=apiSlice.actions
export default apiSlice.reducer
