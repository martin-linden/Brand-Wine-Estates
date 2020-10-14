/* import React from "react"
import styled from "styled-components"
import tw from 'twin.macro'
import Image from 'gatsby-image'
import { navigate } from "gatsby";


const ProducerCard = ({ name, country, imageSharp, link }) => {


    return (

        <CardWrapper onClick={() => navigate(`/${link}`)} >
            <div className="">
                <Image
                    fluid={imageSharp}
                />
            </div>

        </CardWrapper>
    )
};

export default ProducerCard;


const CardWrapper = styled.div`
${tw`shadow flex flex-col justify-start hover:shadow-lg cursor-pointer`}
max-height: autoj;
width: 700px;
background: #fff;
border-radius: 5px;



.info-section{
    ${tw` pl-3 pr-3 pt-3 `}
}

#producer-img{
    ${tw` m-0 `}
    width: fit-content;
}


` */