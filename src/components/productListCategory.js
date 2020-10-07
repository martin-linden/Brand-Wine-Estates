import React from 'react'
import ProductListCategoryWines from '../components/ProductListCategoryWines'
import styled from "styled-components"
import tw from 'twin.macro'

const ProductListCategory = (Props) => {
    const { productCategory } = Props

    const producers = [...new Set(productCategory.map(item => item.producer))];
    const wineOfProducers = producers.map(producer => productCategory.filter(product => product.producer === producer))
    wineOfProducers.forEach(wineGroup => wineGroup.sort((a, b) => a.type < b.type))

    return (
        <Container>
            <h1>{wineOfProducers[0][0].country}</h1>
            {wineOfProducers.map(wines => <ProductListCategoryWines
                list={wines}

            />)}
        </Container>
    )
}

export default ProductListCategory

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;

margin-left: auto;
margin-right: auto;

h1{
    margin-left: 45px;
}
/* padding: 50px; */
`