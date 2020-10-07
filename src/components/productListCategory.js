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
            <h2>{wineOfProducers[0][0].country}</h2>
            <hr />
            <table>
                <tbody>
                    <tr>
                        <td><span>Namn</span></td>
                        <td><span>Producent</span></td>
                        <td><span>Årgång</span></td>
                        <td><span>Produkttyp</span></td>
                        <td><span>Pris</span></td>
                    </tr>
                </tbody>
            </table>
            {wineOfProducers.map(wines => <ProductListCategoryWines
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

