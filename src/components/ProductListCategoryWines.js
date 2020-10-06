import React from 'react'
import ProductListItem from '../components/ProductListItem'


const ProductListCategoryWines = (Props) => {
    const { list } = Props
    return (
        <>
            {list.map(wine => <ProductListItem wine={wine} />)}
        </>
    )
}

export default ProductListCategoryWines