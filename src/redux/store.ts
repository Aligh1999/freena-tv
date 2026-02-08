import { configureStore } from '@reduxjs/toolkit'
import app from './slices/app'

export const store = configureStore({
    reducer: {
        app,
    },
})

export type IRootState = ReturnType<typeof store.getState>
export type IAppDispatch = typeof store.dispatch