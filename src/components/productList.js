import React from "react"
import styled from "styled-components"
import tw from 'twin.macro'
import ProductCard from '../components/productCard'



const ProductList = ({ data }) => {

    /* console.log(data); */


    /* let italy = data.filter(e => e.country === "Italien"); */

    const vineProducers = data.map(function (e) {
        return e.producer
    })

    /*    console.log(vineProducers); */

    const sortetNames = data.sort((a, b) => (a.year > b.year ? 1 : -1))

    console.log(sortetNames);

    return (

        <React.Fragment>
            {/*   {data.map((data, i) => {
                return (
                    <ProductCard
                        producer={vineProducers}
                    ></ProductCard>
                )
            })} */}

            {/* <p>{italy}</p> */}
        </React.Fragment>


    )

};
export default ProductList;





