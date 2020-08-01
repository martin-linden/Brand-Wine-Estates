import React from "react"
import styled from "styled-components"
import tw from 'twin.macro'
import WineCard from '../components/wineCard'


const WineList = (props) => {
    /* console.log(props); */


    return (
        <Wrapper>
            <WineListWrapper>
                {props.postData.map(wine =>
                    <WineCard
                        {...wine}
                        key={wine.id}
                    />
                )}

            </WineListWrapper>
        </Wrapper>

    )

};
export default WineList;


const Wrapper = styled.div`
display: flex;
justify-content: center;
height: auto;
background: #FAF8F8;
`;

const WineListWrapper = styled.div`
${ tw` mt-10 mb-10 grid md:grid-cols-4 sm:grid-cols-3 gap-10`}





`