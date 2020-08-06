import React from "react"
import styled from "styled-components"
import tw from 'twin.macro'
import { navigate } from "gatsby";
import Image from 'gatsby-image'

const WineCard = (props) => {



    return (
        <CardWrapper onClick={() => navigate(`/wines/${props.slug}`)}>
            <div className="wine-wrapper">
                <Image
                    fluid={props.image.childImageSharp.fluid}
                />
            </div>
            <div className="info-section">
                <h5>{props.producer}</h5>
                <h4>{props.name}</h4>
                <h5>{props.country} - {props.year}</h5>
                <img src={props.type.publicURL}
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
justify-content: flex-end;
align-items: center;

.wine-wrapper{
    width: 70px;
    
   
    
}

.info-section{
    ${ tw`mt-5 `}
}

.year-type{
    ${ tw`flex items-center`}
}

#wine-img{
    ${ tw` m-0 `}
    width: 70px;
    max-height: 210px;
    min-height: 210px;
}
#icon-img{
    ${ tw` mt-1 mb-1`}
    width: 20px;
    max-height: 20px;
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