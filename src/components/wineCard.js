import React from "react"
import styled from "styled-components"
import tw from 'twin.macro'
import Image from 'gatsby-image'
import { navigate } from "gatsby";
import { GlobalStyle } from '../components/globalStyle'
import RedWine from '../images/type/red.svg'
import Rose from '../images/type/rose.svg'
import WhiteWine from '../images/type/white.svg'
import Sparkling from '../images/type/sparkling2.svg'
import Gin from '../images/type/gin.svg'
import DessertWine from '../images/type/dessert2.svg'
import Arrow from '../images/arrow.svg'

const WineCard = ({ name, country, producer, year, imageSharp, link, type }) => {

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
                <h4 style={{ fontWeight: "500" }}>{name}</h4>
                <h5>{country} - {year}</h5>
            </div>
            <div>
                <div>
                    {type === "Rött" ? <img src={RedWine} id="icon-img" /> : null}
                    {type === "Vitt" ? <img src={WhiteWine} id="icon-img" /> : null}
                    {type === "Rosé" ? <img src={Rose} id="icon-img" /> : null}
                    {type === "Mousserande" ? <img src={Sparkling} id="icon-img" /> : null}
                    {type === "Gin" ? <img src={Gin} id="icon-img-gin" /> : null}
                    {type === "Desertvin" ? <img src={DessertWine} id="icon-img-dessert" /> : null}
                </div>
                <div className="test">

                    <ReadMore>
                        <img src={Arrow} id="read-more-img"></img>
                    </ReadMore>
                    <h6 id="read-more-text">Läs mer</h6>
                </div>
            </div>

        </CardWrapper >
    )
};

export default WineCard;

const ReadMore = styled.div`

 opacity: 0%;

 transition: 0.3s ease-in-out; 
 

`


const CardWrapper = styled.div`
${ tw`shadow hover:shadow-lg cursor-pointer`}
min-height: 450px;
max-height: 470px; 
width: 238px;
padding: 20px;
background: #fff;
border-radius: 5px;
text-align: center;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
transition: 0.3s ease-in-out;  

&:hover ${ReadMore} {
 opacity: 100%;
 transition: 0.3s ease-in-out; 

}

.test {
    display: flex;
align-items: center;
justify-content: center;
margin-right: 19px;
margin-top: 0px;
}
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
   min-height: 100px;
    
}

h6{
    margin-bottom: 15px;
}

#icon-img{
    ${ tw` mt-1 mb-1`}
    
   width: 15px;
   max-height: 29px;
   min-height: 29px;
margin-top: 10px; 
}
#icon-img-gin{
    ${ tw` mt-1 mb-1`}
    
   width: 20px;
   max-height: 29px;
   min-height: 29px;
margin-top: 10px; 
}
#icon-img-dessert{
    ${ tw` mt-1 mb-1`}
    
   width: 20px;
   max-height: 29px;
   min-height: 29px;
margin-top: 10px; 
}

#read-more-text{
    margin: 0;
    margin-left: 10px;
}

#read-more-img{
    
    width: 20px;
   max-height: 29px;
   min-height: 29px;
   margin: 0px;
}


`

