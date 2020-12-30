import {FETCH_PRODUCTS, FILTER_PRODUCTS_BY_STYLE, SORT_PRODUCTS_BY_PRICE} from '../types'; 

export const productsReducer = (state = {}, action) => {
    
    switch (action.type) {
        case FETCH_PRODUCTS: 
            return {items: action.payload};
        case FILTER_PRODUCTS_BY_STYLE: 
            return {
                ...state, 
                style: action.payload.style,
                filteredItems: action.payload.items
            };
        case SORT_PRODUCTS_BY_PRICE: 
            return {
                ...state,
                sort: action.payload.sort,
                filteredItems: action.payload.items
            };
        default: 
            return state;
    }

}
