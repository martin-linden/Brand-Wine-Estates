import React from 'react'
import ProductListItem from '../components/ProductListItem'
import styled from "styled-components"
import tw from 'twin.macro'

const ProductListCategoryWines = (Props) => {
    const { list } = Props
    return (
        <Container>
            {list.map(wine => <ProductListItem wine={wine} />)}
        </Container>
    )
}

export default ProductListCategoryWines

export const Container = styled.div`

`
