import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface IState {
    openedModalIds: string[],
}

const initialState: IState = {
    openedModalIds: [],
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        pushToModalIds: (state, { payload }: PayloadAction<string>) => {
            state.openedModalIds = [
                ...state.openedModalIds,
                payload
            ]
        },
        popFromModalIds: (state, { payload }: PayloadAction<string | undefined>) => {
            if (payload)
                state.openedModalIds = state.openedModalIds.filter(el => el !== payload);
            else
                state.openedModalIds = state.openedModalIds.slice(0, -1)
        },
    },
})

export const {
    pushToModalIds,
    popFromModalIds,
} = appSlice.actions

export default appSlice.reducer