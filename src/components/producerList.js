/* import React from "react"
import styled from "styled-components"
import tw from 'twin.macro'
import ProducerCard from '../components/producerCard'



const ProducerList = ({ data }) => {



    return (
        <Wrapper>
            <ProducerListWrapper>
                {data.map((data, i) => {
                    return (
                        <ProducerCard
                            key={i}
                            name={data.name}
                            country={data.country}
                            imageSharp={data.imageSharp.childImageSharp.fluid}
                            link={data.link._meta.uid}
                        />
                    )
                })}

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
${tw` mt-24 mb-24 grid grid-cols-3 gap-3`}





` */