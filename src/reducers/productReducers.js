import {FETCH_PRODUCTS, FILTER_PRODUCTS_BY_STYLE, SORT_PRODUCTS_BY_PRICE} from '../types'; 

export const productsReducer = (state = {}, action) => {
    
    switch (action.type) {
        case FETCH_PRODUCTS: 
            return {items: action.payload, filteredItems: action.payload};
        case FILTER_PRODUCTS_BY_STYLE: 
            return {
                ...state, 
                productStyle: action.payload.productStyle,
                filteredItems: action.payload.items
            };
        case SORT_PRODUCTS_BY_PRICE: 
            return {
                ...state,
                productSort: action.payload.productSort,
                filteredItems: action.payload.items
            };
        default: 
            return state;
    }

}
