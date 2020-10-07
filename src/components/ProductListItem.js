import React from 'react'
import styled from "styled-components"
import tw from 'twin.macro'


const ProductListItem = (Props) => {
    const { wine } = Props
    return (
        <FlexContainer>
            <Container>
                <div className="test">
                    <div className="test2">
                        <p>{wine.name}</p>
                    </div>
                </div>

                <div className="test">
                    <div className="test2">
                        <p>{wine.producer}</p>
                    </div>
                </div>

                <div className="test">
                    <div className="test2">
                        <p>{wine.year}</p>
                    </div>
                </div>

                <div className="test">
                    <div className="test2">
                        <p>{wine.type}</p>
                    </div>
                </div>
            </Container>
        </FlexContainer>
    )
}

export default ProductListItem

export const FlexContainer = styled.div`
display: flex;
justify-content: center;

`

export const Container = styled.div`

display: grid;
    grid-template-columns: 1fr 1fr 100px 1fr;
    gap: 1.25rem;

.test{
    
   width: 300px;
  display: flex;
  justify-content: center;
 /*  background: pink; */
   
    .test2{
       display: flex;
      /*   background: green;  */
       width: 200px;
    }
}

`