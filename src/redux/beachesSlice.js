import { createSlice } from '@reduxjs/toolkit'
import { beaches } from "../data/beaches";


const allBeaches = beaches;

export const beachesSlice = createSlice({
    name: 'beachesState',

    initialState: {
        filteredBeaches: allBeaches,        
    },

    reducers: {        
        filterCategory: (state, action) => {
            const { key, value } = action.payload

            if (value === "ALL") {
                state.filteredBeaches = allBeaches
            } else {
                state.filteredBeaches = allBeaches.filter(
                    beach => beach[key] === value
                )
            }
        },
    },
})

export const getFilteredBeaches = state => state.beachesState.filteredBeaches;

export const { filterCategory} = beachesSlice.actions;
export default beachesSlice.reducer
