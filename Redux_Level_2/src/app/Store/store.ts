import {configureStore} from '@reduxjs/toolkit'
import counterReducer from '../Features/CountSlice/CountSlice'
import logger from '../Middleware/Middleware'

export const store = configureStore({
    reducer: {
        counter: counterReducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch