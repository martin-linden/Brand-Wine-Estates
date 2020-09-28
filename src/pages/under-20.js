import React from 'react'
import styled from 'styled-components';
import Layout from "../components/layout"


const Under20Page = (props) => {


    return (
        <Layout newPath={props.location.pathname}>
            <Wrapper>
                <h1>För dig under 20 år</h1>
                <p>Enligt alkohollagen och Konsumentverkets allmänna råd om marknadsföring av alkohol till konsumenter ska särskild måttfullhet iakttas vid all marknadsföring av alkoholdryck till konsumenter. Det är vidare enligt alkohollagen förbjudet att rikta marknadsföringen särskilt till personer som inte har fyllt 25 år.</p>
            </Wrapper>
        </Layout>
    )
}

export default Under20Page


const Wrapper = styled.div`
padding: 25px;

`;

