import React from 'react'
import { RichText } from 'prismic-reactjs'
import styled from "styled-components"
import tw from 'twin.macro'


const Terms = ({ data }) => {

    console.log();


    return (
        <Container>
            <TextWrapper>
                <RichText render={data} />
            </TextWrapper>
        </Container>


    )
}

export default Terms;

export const Container = styled.div`
background: #f8f8f8;

`

export const TextWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
max-width: 600px;
margin-left: auto;
margin-right: auto;
padding: 20px;
padding-top: 50px;
padding-bottom: 50px;

`
