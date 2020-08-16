import React from "react"
import styled from "styled-components"
import tw from 'twin.macro'
import WineCard from '../components/wineCard'


const WineList = (props) => {
    /* console.log(props); */


    return (
        <Wrapper>
            <WineListWrapper>
                {props.wineCardData.map(wineCard =>
                    <WineCard
                        {...wineCard}
                        key={wineCard.id}
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
${ tw` mt-24 mb-24 grid grid-cols-4 gap-16`}

@media (max-width: 1380px) {
    ${ tw` grid-cols-3`}
    }
@media (max-width: 1090px) {
    ${ tw` grid-cols-2`}
    }
@media (max-width: 670px) {
    ${ tw` grid-cols-1`}
    }





`