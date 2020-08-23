import React from "react"
import styled from "styled-components"
import tw from 'twin.macro'
import Image from 'gatsby-image'
import { navigate } from "gatsby";
import { GlobalStyle } from '../components/globalStyle'

const WineCard = ({ name, country, producer, year, imageSharp, link, typeImage }) => {



    return (
        <CardWrapper onClick={() => navigate(`/${link}`)}>

            <GlobalStyle />
            <Image
                fixed={imageSharp}
                imgStyle={{ objectFit: 'contain' }}
                style={{ maxWidth: 60 }}
            />
            <div className="info-section">
                <h5>{producer}</h5>
                <h4>{name}</h4>
                <h5>{country} - {year}</h5>
                <Image fixed={typeImage}
                    imgStyle={{ objectFit: 'contain' }}
                    style={{ maxWidth: 16, maxHeight: 16 }} />
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
/* color: black; */


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
    
    max-height: 19px;
}

.goes-with{
    ${ tw` mb-5 mt-5 flex items-center  `}
}


`