import React from 'react'
import styled from "styled-components"
import tw from 'twin.macro'


const ProductListItem = (Props) => {
    const { wine } = Props
    return (
        <FlexContainer>
            <Container>
                <p className="padding">{wine.name}</p>
                <p className="padding">{wine.producer}</p>
                <p className="padding">{wine.year}</p>
                <p className="padding">{wine.type}</p>
            </Container>
        </FlexContainer>
    )
}

export default ProductListItem

export const FlexContainer = styled.div`

`

export const Container = styled.div`

display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr
    /* gap: 1.25rem; */

    p{
        padding: 5px;
    }


`