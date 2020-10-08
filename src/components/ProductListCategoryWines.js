import React from 'react'
import ProductListItem from '../components/ProductListItem'
import styled from "styled-components"
import tw from 'twin.macro'

const ProductListCategoryWines = (Props) => {
    const { list } = Props
    console.log(list[0].region);
    return (
        <Container>
            <div className="header">
                <h3>{list[0].region}</h3>
            </div>

            {/* <hr /> */}
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
            {list.map(wine => <ProductListItem wine={wine} />)}
        </Container>
    )
}

export default ProductListCategoryWines

export const Container = styled.div`

.header{
    display: flex;
    justify-content: flex-start;
}

h3{
   /*  margin-top: 45px;
        margin-bottom: 45px; */
        font-weight: 400;
        padding: 10px;
}

hr{
        border-top: 1px solid #ffffff;
       
        
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
