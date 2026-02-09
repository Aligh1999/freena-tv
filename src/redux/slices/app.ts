import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface IState {
    openedModalIds: string[],
    stackHistory: Array<null | string>
}

const initialState: IState = {
    openedModalIds: [],
    stackHistory: []
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
        prependToStackHistory: (state, { payload }: PayloadAction<null | string>) => {
            state.stackHistory = [
                payload,
                ...state.stackHistory
            ]
        },
        removeFirstStackHistory: state => {
            state.stackHistory = state.stackHistory.slice(1)
        }
    },
})

export const {
    pushToModalIds,
    popFromModalIds,
    prependToStackHistory,
    removeFirstStackHistory
} = appSlice.actions

export default appSlice.reducer