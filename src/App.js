import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {decrement, decrementTen, increment, incrementTen, reset} from "./reducer/counter/counterReducer";

const App = () => {
    const dispatch = useDispatch()
    const {count} = useSelector((state) => state.counterReducer)
    const  plus = () => {
        dispatch(increment())
    }
    const minus = () => {
        if (count > 0){
            dispatch(decrement())
        }
    }
    const  plusTen = () => {
        dispatch(incrementTen(10))
    }
    const minusTen = () => {
        if (count > 10){
            dispatch(decrementTen(10))
        }
    }
    const resetCount = () => {
        dispatch(reset())
    }
    return (
        <div>
          <span>{count}</span>
            <button onClick={plus}>+</button>
            <button onClick={minus}>-</button>
            <button onClick={plusTen}>+10</button>
            <button onClick={minusTen}>-10</button>
            <button onClick={resetCount}>reset</button>
        </div>
    );
};

export default App;