import React from "react"
import styled from "styled-components"
import tw from 'twin.macro'
import { navigate } from "gatsby";
import Image from 'gatsby-image'

const WineCard = (props) => {



    return (
        <CardWrapper onClick={() => navigate(`/wines/${props.slug}`)}>

            <Image
                fixed={props.image.childImageSharp.fixed}
                style={{ maxWidth: 70 }}
                imgStyle={{ objectFit: 'cover' }}
            // className="wine-wrapper"

            />

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
justify-content: center;
align-items: center;
text-align: center;

/* .wine-wrapper{
    max-width: 100px;
    min-width: 100px;
} */

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