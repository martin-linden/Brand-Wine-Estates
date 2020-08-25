import React from "react"
import styled from "styled-components"
import tw from 'twin.macro'
import Image from 'gatsby-image'
import { navigate } from "gatsby";
import { GlobalStyle } from '../components/globalStyle'
import RedWine from '../images/type/red-circle.svg'
import Rose from '../images/type/rose-circle.svg'

const WineCard = ({ name, country, producer, year, imageSharp, link, typeImage }) => {



    /*   if (year === "2017") {
          year = <img src={RedWine}
              id="icon-img" />
      } else if (year === "2016") {
          year = <img src={Rose}
              id="icon-img" />
      } */

    return (
        <CardWrapper onClick={() => navigate(`/${link}`)}>

            <GlobalStyle />
            <div className="wine-wrapper">
                <Image
                    fluid={imageSharp}
                    imgStyle={{ objectFit: 'contain' }}
                    style={{ minHeight: 200, maxHeight: 200 }}
                />
            </div>
            <div className="info-section">
                <h5>{producer}</h5>
                <h4>{name}</h4>
                <h5>{country} - {year}</h5>
            </div>
            <div>

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