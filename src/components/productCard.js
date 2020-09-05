import React from "react"
import styled from "styled-components"
import tw from 'twin.macro'




const ProductCard = ({ grape, name }) => {

    return (
        <CardWrapper>
            <p>{name}</p>
            <p>{grape}</p>

        </CardWrapper>
    )
};

export default ProductCard;


const CardWrapper = styled.div`
${ tw`flex`}
border-bottom: 1px solid black;
margin-bottom: 10px;
max-width: 1000px;

p{
    padding-left: 10px;
    padding-right: 10px;
    margin-bottom: 0;
}
`