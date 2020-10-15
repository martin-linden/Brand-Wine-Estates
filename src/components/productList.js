import React from "react"
import styled from "styled-components"
import tw from 'twin.macro'
import ProductCard from '../components/productCard'
import ProductListCategory from '../components/productListCategory'


const ProductList = ({ data }) => {


    const italy = data.filter(e => e.country === "Italien");
    const england = data.filter(e => e.country === "Storbritannien");
    const france = data.filter(e => e.country === "Frankrike");
    const india = data.filter(e => e.country === "Indien")


    const products = [
        england,
        france,
        italy,
        india
    ]



    return (
        <Container>
            {products.map(product => <ProductListCategory productCategory={product} />)}
        </Container>
    )

};
export default ProductList;


export const Container = styled.div`
margin-bottom: 40px;
@media (max-width: 680px) {
    margin-bottom: 0px;;
    }

`



