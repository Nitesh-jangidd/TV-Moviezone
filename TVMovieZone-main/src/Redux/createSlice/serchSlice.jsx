import { createSlice } from "@reduxjs/toolkit";

const  initialState={
    searchText:"",
    dummy:1

}
const searchSlice=createSlice({
    name:"search",
    initialState,
    reducers:{
        setSearchText:(state,action)=>{
               state.searchText=action.payload
        
       
        },
        setdummyText:(state)=>{
               state.dummy+=1
        
       
        },
        clearSearchText:(state)=>{
            state.searchText=""
        }
    }
})
export const {setSearchText,clearSearchText,setdummyText} =searchSlice.actions
export default searchSlice.reducer
