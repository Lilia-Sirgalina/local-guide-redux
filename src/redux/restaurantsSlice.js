import { createSlice } from '@reduxjs/toolkit'
import { restaurants } from "../data/restaurants";


const allRestaurants = restaurants;

export const restaurantsSlice = createSlice({
    name: 'restaurantsState',

    initialState: {
        filteredRestaurants: allRestaurants,        
    },

    reducers: {        
        filterCategory: (state, action) => {
            const { key, value } = action.payload

            if (value === "ALL") {
                state.filteredRestaurants = allRestaurants
            } else {
                state.filteredRestaurants = allRestaurants.filter(
                    restaurant => restaurant[key] === value
                )
            }
        },
    },
})

export const getFilteredRestaurants = state => state.restaurantsState.filteredRestaurants;

export const { filterCategory} = restaurantsSlice.actions;
export default restaurantsSlice.reducer