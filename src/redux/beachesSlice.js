import { createSlice } from '@reduxjs/toolkit'
import { beaches } from "../data/beaches";


export const beachesSlice = createSlice({
    name: 'beaches',

    initialState: {
        allBeaches: beaches,
        filteredBeaches: beaches
    },

    reducers: {        
        filterCategory: (state, action) => {
            const { key, value } = action.payload

            if (value === "ALL") {
                state.filteredBeaches = state.allBeaches
            } else {
                state.filteredBeaches = state.allBeaches.filter(
                    beach => beach[key] === value
                )
            }
        },
    },
})

export const getFilteredBeaches = state => state.beaches.filteredBeaches
export const { filterCategory} = beachesSlice.actions

export default beachesSlice.reducer
