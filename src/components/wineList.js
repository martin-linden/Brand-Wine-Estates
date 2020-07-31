import React from "react"
import styled from "styled-components"
import tw from 'twin.macro'
import WineCard from '../components/wineCard'

class WineList extends React.Component {


    render() {

        return (
            <Wrapper>
                <WineListWrapper>
                    <WineCard />
                    <WineCard />
                    <WineCard />
                    <WineCard />
                    <WineCard />
                    <WineCard />
                    <WineCard />
                    <WineCard />
                </WineListWrapper>
            </Wrapper>

        )
    }
}
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