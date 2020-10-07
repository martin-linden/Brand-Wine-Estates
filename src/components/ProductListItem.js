import React from 'react'
import styled from "styled-components"
import { navigate } from "gatsby";
import tw from 'twin.macro'


const ProductListItem = (Props) => {

    const { wine } = Props
    const link = wine.link._meta.uid;

    return (
        <FlexContainer>
            <Container>
                <table>
                    <tbody>
                        <tr>
                            <td onClick={() => navigate(`/${link}`)}>{wine.name}</td>
                            <td>{wine.producer}</td>
                            <td>{wine.region}</td>
                            <td>{wine.year}</td>
                            <td>{wine.type}</td>
                            <td>{wine.price}</td>
                        </tr>
                    </tbody>
                </table>
                {/* <p className="padding">{wine.name}</p>
                <p className="padding">{wine.producer}</p>
                <p className="padding">{wine.year}</p>
                <p className="padding">{wine.type}</p> */}
            </Container>
        </FlexContainer>
    )
}

export default ProductListItem

export const FlexContainer = styled.div`

`

export const Container = styled.div`

/* display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr
   */

    td{
        padding: 10px;
        width: 15%;
    }


`

/* onClick={() => navigate(`/${link}`)}>{wine.name} */