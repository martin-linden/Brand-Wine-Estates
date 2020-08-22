import React from "react"
import styled from "styled-components"
import tw from 'twin.macro'
import Image from 'gatsby-image'
import { navigate } from "gatsby";

const WineCard = ({ name, country, producer, year, imageSharp, typeImage, link }) => {



    return (
        <CardWrapper onClick={() => navigate(`/${link}`)}>


            <Image
                fixed={imageSharp}
                imgStyle={{ objectFit: 'contain' }}
                style={{ maxWidth: 200 }}
            />
            <div className="info-section">
                <h5>{producer}</h5>
                <h4>{name}</h4>
                <h5>{country} - {year}</h5>
                <img src={typeImage}
                    id="icon-img" />
                <h6>Läs mer</h6>
            </div>
        </CardWrapper >
    )
};

export default WineCard;


const CardWrapper = styled.div`
${ tw`shadow hover:shadow-lg cursor-pointer`}
height: 430px;
width: 235px;
padding: 20px;
background: #fff;
border-radius: 5px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;

/* .wine-wrapper{
    max-width: 100px;
    min-width: 100px;
} */

.image-wrapper{
    max-width: 70px;
    max-height: 200px;
}

.info-section{
    ${ tw`mt-5 `}
}

.year-type{
    ${ tw`flex items-center`}
}


#icon-img{
    ${ tw` mt-1 mb-1`}
    
    max-height: 16px;
}

h4{
    font-family: Assistant;
    ${ tw` mb-2 `}
}

h3{
    font-family: Assistant;
    ${ tw` mb-1 `}
}
h5{
    font-family: Assistant;
    ${ tw` mb-2 `}
}
h6{
    font-family: Assistant;
    ${ tw` mb-1 mt-0 `}
    
}
.goes-with{
    ${ tw` mb-5 mt-5 flex items-center  `}
}


`