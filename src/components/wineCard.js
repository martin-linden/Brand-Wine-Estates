import React from "react"
import styled from "styled-components"
import tw from 'twin.macro'
import Image from 'gatsby-image'
import { navigate } from "gatsby";
import { GlobalStyle } from '../components/globalStyle'
import RedWine from '../images/type/red.svg'
import Rose from '../images/type/rose-circle.svg'
import WhiteWine from '../images/type/white.svg'

const WineCard = ({ name, country, producer, year, imageSharp, link, type }) => {

    let typeIcon = null
    /* let typeText = null */

    if (type === "Rött") {
        typeIcon = <img src={RedWine}
            id="icon-img" />
        /*  typeText = "Rött vin" */
    } else if (type === "Vitt") {
        typeIcon = <img src={WhiteWine}
            id="icon-img" />
    }

    return (
        <CardWrapper onClick={() => navigate(`/${link}`)}>

            <GlobalStyle />
            <div className="wine-wrapper">
                <Image
                    fluid={imageSharp}
                    imgStyle={{ objectFit: 'contain' }}
                    style={{ minHeight: 200, maxHeight: 200 }}
                    loading="lazy"
                />
            </div>
            <div className="info-section">
                <h5>{producer}</h5>
                <h4>{name}</h4>
                <h5>{country} - {year}</h5>
            </div>
            <div>
                {typeIcon}
                {/* <h5>{typeText}</h5> */}
            </div>
            <div>
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
text-align: center;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;

.wine-wrapper{
    
    width: 100px;
    min-height: 205px;
    max-height: 205px;
    
   
}



.image-wrapper{
    width: 100px;
    max-height: 200px;
}

.info-section{
    ${ tw`mt-5 `}
    h5  {
        margin-bottom: 15px;
    }
    h4 {
        margin-bottom: 15px;
    }
    
}

h6{
    margin-bottom: 15px;
}

#icon-img{
    ${ tw` mt-1 mb-1`}
    
   width: 15px;
}



`