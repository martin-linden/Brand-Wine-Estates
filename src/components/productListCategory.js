import React from 'react'
import ProductListCategoryWines from '../components/ProductListCategoryWines'

const ProductListCategory = (Props) => {
    const { productCategory } = Props

    const producers = [...new Set(productCategory.map(item => item.producer))];
    const wineOfProducers = producers.map(producer => productCategory.filter(product => product.producer === producer))
    wineOfProducers.forEach(wineGroup => wineGroup.sort((a, b) => a.type < b.type))

    return (
        <>
            <h1>{wineOfProducers[0][0].country}</h1>
            {wineOfProducers.map(wines => <ProductListCategoryWines list={wines} />)}
        </>
    )
}

export default ProductListCategory