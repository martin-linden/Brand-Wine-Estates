import React from 'react'
import ProductListCategoryWines from '../components/ProductListCategoryWines'
import styled from "styled-components"
import tw from 'twin.macro'

const ProductListCategory = (Props) => {
    const { productCategory } = Props

    /*   console.log(productCategory);
   */

    const regions = [...new Set(productCategory.map(item => item.region))];
    const producers = [...new Set(productCategory.map(item => item.producer))];

    /*  console.log(producers); */



    /* console.log(regionsOfProducers); */
    /* const wineOfProducers = producers.map(producer => productCategory.filter(product => product.producer === producer)) */
    const wineOfRegions = regions.map(producer => productCategory.filter(region => region.region === producer))



    /*  wineOfProducers.forEach(wineGroup => wineGroup.sort((a, b) => a.type < b.type)) */

    /*  console.log(wineOfProducers); */

    /* console.log(wineOfRegions[0][0]); */


    return (
        <Container>
            <h2>{wineOfRegions[0][0].country}</h2>
            <hr />

            {wineOfRegions.map(wines => <ProductListCategoryWines
                list={wines}

            />)}
        </Container>
    )
}

export default ProductListCategory

export const Container = styled.div`
margin-left: 10%;
margin-right: 10%;  
margin-top: 50px; 
padding: 20px;


h2{
    padding: 10px;
}

@media (max-width: 1000px) {
    margin-left: 0%;
margin-right: 0%; 
    }
    
    hr{
        border-top: 1px solid #ffd1d1;
    }
    td{
        padding: 10px;
        width: 15%;
        font-size: 16px;
        @media (max-width: 1000px) { 
    font-size: 14px;
    }
        @media (max-width: 680px) {
    font-size: 10px;
    }

        span{
            font-weight: 600;
        }
    }

`

