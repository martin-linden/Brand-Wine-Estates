import React from "react"
import styled from "styled-components"
import tw from 'twin.macro'



class Card extends React.Component {


    render() {

        return (
            <CardWrapper>
                <h1>Test</h1>
            </CardWrapper>

        )
    }
}
export default Card;


const CardWrapper = styled.div`
${ tw`shadow`}
height: 400px;
width: 230px;
padding: 20px;
background: #fff;
border-radius: 5px;


`