import Foods from './foods'

export const SEARCH_INPUT_CHANGED = 'SEARCH_INPUT_CHANGED'
export const FETCH_FOOD_DETAILS = 'FETCH_FOOD_DETAILS'
export const ADD_FOOD = 'ADD_FOOD'

export function searchTermChanged(searchTerm) {
    return {
        type: SEARCH_INPUT_CHANGED,
        payload: { searchTerm },
    };
}

export function fetchFoodDetails(data) {
    return {
        type: FETCH_FOOD_DETAILS,
        payload: { data }
    }
}

export function addFood(data) {
    return {
        type: ADD_FOOD,
        payload: { data }
    }
}