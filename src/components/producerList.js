import React from "react"
import styled from "styled-components"
import tw from 'twin.macro'
import ProducerCard from '../components/producerCard'


const ProducerList = (props) => {
    /* console.log(props); */


    return (
        <Wrapper>
            <ProducerListWrapper>
                {props.producerData.map(producer =>
                    <ProducerCard
                        {...producer}
                        key={producer.id}
                    />
                )}

            </ProducerListWrapper>
        </Wrapper>

    )

};
export default ProducerList;


const Wrapper = styled.div`
display: flex;
justify-content: center;
height: auto;
background: #FAF8F8;
`;

const ProducerListWrapper = styled.div`
${ tw` mt-24 mb-24 grid md:grid-cols-3 sm:grid-cols-3 gap-5`}





`