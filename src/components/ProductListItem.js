import React from 'react'
import styled from "styled-components"
import { navigate } from "gatsby";



const ProductListItem = (Props) => {

    const { wine } = Props
    const link = wine.link._meta.uid;

    return (
        <FlexContainer>
            <Container>
                <table>
                    <tbody>
                        <tr>
                            <td id="td-name" onClick={() => navigate(`/${link}`)}>{wine.name}</td>
                            <td>{wine.producer}</td>
                            <td>{wine.year}</td>
                            {wine.type === "Rött" ? <td>Rödvin</td>: null}
                            {wine.type === "Vitt" ? <td>Vitvin</td>: null}
                            {wine.type === "Rosé" ? <td>Rosévin</td>: null}
                            {wine.type === "Mousserande" ? <td>Mousserande</td>: null}
                            {wine.type === "Gin" ? <td>Sprit</td>: null}
                            {wine.type === "Desertvin" ? <td>Desertvin</td>: null}
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


    td{
        padding: 10px;
        width: 15%;
    }

    #td-name{
        cursor: pointer;
    }



`

/* onClick={() => navigate(`/${link}`)}>{wine.name} */