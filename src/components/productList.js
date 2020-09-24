import React from "react"
import styled from "styled-components"
import tw from 'twin.macro'
import ProductCard from '../components/productCard'



const ProductList = ({ data }) => {

    console.log(data);





    return (

        <React.Fragment>
            {data.map((data, i) => {
                return (
                    <ProductCard
                        key={i}
                        name={data.node.name}
                        grape={data.node.grape}
                        producer={data.node.producer}
                    />
                )
            })}
        </React.Fragment>


    )

};
export default ProductList;





