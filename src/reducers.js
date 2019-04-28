//import Food from './foods';
import { SEARCH_INPUT_CHANGED, FETCH_FOOD_DETAILS } from './actions'

const initialState = {
    food: [],
    searchValue: '',
};

export default function reducer(state = initialState, action) {
    // switch between the action type
    switch (action.type) {
        case SEARCH_INPUT_CHANGED:
            return {
                ...state,
                searchValue: action.payload,
                // food: searchTerm ? Food.filter(
                //     (food) => (food.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1)
                // ) : Food,
            };
        case FETCH_FOOD_DETAILS:
        console.log('fetching food details');
        console.log(action);
            return {
                ...state,
                searchValue: action.payload.searchValue,
                food: action.payload.foods
                // food: searchTerm ? Food.filter(
                //     (food) => (food.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1)
                // ) : Food,
            };
        default:
            return state;
    }
}