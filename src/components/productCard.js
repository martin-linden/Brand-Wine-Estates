import React from "react"
import styled from "styled-components"
import tw from 'twin.macro'




const ProductCard = ({ producer }) => {



    return (
        <CardWrapper>
            <p>{producer}</p>

        </CardWrapper>
    )
};

export default ProductCard;


const CardWrapper = styled.div`
${tw`flex`}
/* max-width: 1000px; */
margin-bottom: 10px;

.data-item{
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid black;
}

p{
    padding-left: 10px;
    padding-right: 10px;
    margin-bottom: 0;
}

.country-wrapper{
    margin-bottom: 50px;
}
`