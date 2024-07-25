import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import salesData from '../assets/sales.json'

interface FilterState {
    filters: number[]
}

export const getDivisions = salesData.reduce((acc, obj) => {
    if (!acc.includes(obj.division)) {
        acc.push(obj.division);
    }
    return acc
}, [])


const initialState: FilterState = {
    filters: getDivisions
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
