import React from "react"
import styled from "styled-components"
import tw from 'twin.macro'
import ProductCard from '../components/productCard'
import ProductListCategory from '../components/productListCategory'


const ProductList = ({ data }) => {


    const italy = data.filter(e => e.country === "Italien");
    const england = data.filter(e => e.country === "Storbritannien");
    const frankrike = data.filter(e => e.country === "Frankrike");
    const india = data.filter(e => e.country === "Indien")

    const products = [
        england,
        italy,
        frankrike,
        india

    ]

    return (
        <>
            {products.map(product => <ProductListCategory productCategory={product} />)}
        </>
    )

};
export default ProductList;





