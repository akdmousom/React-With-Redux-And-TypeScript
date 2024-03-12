import { createSlice } from "@reduxjs/toolkit";
// import { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
    count: number;
}

const initialState: CounterState = {
    count: 0,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers:{
        increment : (state) => {
            if (state.count >= 0) {

                state.count += 1
                
            }
        },

        decrement: (state) => {
            if (state.count > 0) {

                state.count -= 1
                
            }
        }
    }
})

export const {increment, decrement } = counterSlice.actions
export default counterSlice.reducer