import React from "react"
import styled from "styled-components"
import tw from 'twin.macro'
import Image from 'gatsby-image'
import { navigate } from "gatsby";


const ProducerCard = ({ name, country, imageSharp, slug }) => {


    /* console.log(country); */
    return (

        <CardWrapper onClick={() => navigate(`/producers/${slug}`)} >
            <div className="">
                <Image
                    fluid={imageSharp}
                />
            </div>
            <div className="info-section">
                <h4>{country}</h4>
                <h6>{name}</h6>
                <h5>Läs mer</h5>
            </div>
        </CardWrapper>
    )
};

export default ProducerCard;


const CardWrapper = styled.div`
${ tw`shadow flex flex-col justify-start hover:shadow-lg cursor-pointer p-4`}
height: auto;
width: 350px;
background: #fff;
border-radius: 5px;

/* overflow: hidden;  //round img corner */

h4{
    font-family: Assistant;
}

h5{
    font-family: Assistant;
}

h6{
    font-family: Assistant;
}



.info-section{
    ${ tw` pl-3 pr-3 pt-3 `}
    font-family: Assistant;
}

#producer-img{
    ${ tw` m-0 `}
    width: fit-content;
}
 

`