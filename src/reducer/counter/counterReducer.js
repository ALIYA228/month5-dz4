import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState = {
    count:0
}


const counterReducer = createSlice({
    name:'counterReducer',
    initialState,
    reducers:{
        increment:(state, action)=> {
            state.count +=1
        },
        decrement:(state, action) => {
            state.count -=1
        },
        incrementTen:(state, action)=> {
            state.count += action.payload
        },
        decrementTen:(state, action) => {
            state.count -= action.payload
        },
        reset:(state, action) => {
            state.count = 0
        },

    }
})

export const {increment,reset,decrementTen,incrementTen,decrement} = counterReducer.actions
export default counterReducer.reducer