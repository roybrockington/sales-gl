import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface FilterState {
    filters: number[]
}

const initialState: FilterState = {
    filters: [1,2]
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        amend: (state, action: PayloadAction<number>) => {
            let current = JSON.parse(JSON.stringify(state.filters))
            if (current.includes(action.payload)) {
                state.filters = state.filters.filter(x => x !== action.payload)
            } else {
                state.filters = ([...state.filters, action.payload])
            }
        }
    }
})

export const { amend } = filterSlice.actions

export default filterSlice.reducer
