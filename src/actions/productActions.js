import {FETCH_PRODUCTS, FILTER_PRODUCTS_BY_STYLE, SORT_PRODUCTS_BY_PRICE} from '../types'; 

export const fetchProducts = () => async (dispatch) => {
    
    const res = await fetch('/api/products');
    const data = await res.json(); 

    dispatch({
        type: FETCH_PRODUCTS,
        payload: data
    });
    
}

export const filterProducts = (products, style) => async (dispatch) => {

    dispatch({
        type: FILTER_PRODUCTS_BY_STYLE,
        payload: {
            style: style,
            items: style === '' ? products: products.filter(x => x.productStyle.indexOf(style) >= 0)
        }
    })

}

export const sortProducts = (filteredProducts, sort) => (dispatch) => {

    const sortedProducts = filteredProducts.slice(); 
   
    sortProducts.sort((a, b) => sort === 'lowest' ? a.price > b.price ? 1 : -1 : a.price > b.price ? -1: 1);
    
    dispatch({
        type: SORT_PRODUCTS_BY_PRICE,
        payload: {
            sort: sort,
            items: sortedProducts
        }
    })

}