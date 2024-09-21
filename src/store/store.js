import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "../reducer/counter/counterReducer";
const store  = configureStore({
    reducer:{
        counterReducer
    }
})
export default store