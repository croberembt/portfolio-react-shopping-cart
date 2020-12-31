import {FETCH_PRODUCTS, FILTER_PRODUCTS_BY_STYLE, SORT_PRODUCTS_BY_PRICE} from '../types'; 

export const fetchProducts = () => async (dispatch) => {
    
    const res = await fetch('/api/products');
    const data = await res.json(); 

    dispatch({
        type: FETCH_PRODUCTS,
        payload: data
    });
    
}

export const filterProducts = (products, productStyle) => async (dispatch) => {

    dispatch({
        type: FILTER_PRODUCTS_BY_STYLE,
        payload: {
            productStyle: productStyle,
            items: productStyle === '' ? products : products.filter(product => product.productStyle.indexOf(productStyle) >=0)
        }
    })

}

export const sortProducts = (filteredProducts, productSort) => (dispatch) => {

    const sortedProducts = filteredProducts.slice(); 
   
    sortedProducts.sort((a, b) => productSort === 'lowest' ? a.price > b.price ? 1 : -1 : a.price > b.price ? -1: 1);
    
    dispatch({
        type: SORT_PRODUCTS_BY_PRICE,
        payload: {
            productSort: productSort,
            items: sortedProducts
        }
    })

}