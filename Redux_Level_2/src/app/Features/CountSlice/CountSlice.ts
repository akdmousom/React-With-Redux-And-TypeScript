import {createSlice} from '@reduxjs/toolkit'
import {PayloadAction} from '@reduxjs/toolkit'


export interface counterState {
    count: number,
}

const initialState: counterState = {
    count: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            if (state.count >= 0) {

                state.count += 1
                
            }
        },

        decrement: (state) => {
            if (state.count > 0) {
                
                state.count -= 1
                
            }
        },

        incrementByValue: (state, actions: PayloadAction<number>) => {
            state.count += actions.payload
        }
    }
})

export const { increment, decrement, incrementByValue } = counterSlice.actions

export default counterSlice.reducer