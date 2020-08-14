import React from "react"
import styled from "styled-components"
import tw from 'twin.macro'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import Layout from '../components/layout'

export const query = graphql`
query ($slug: String!) {
    winesJson(slug: {eq: $slug}, type: {publicURL: {}}) {
      grape
      name
      slug
      country
      producer
      alcohol
      text
      acid
      sweetness
      temp
      link
      region
      volume
      number
      year
      image {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
      type {
        publicURL
      }
      taste {
        url {
          publicURL
        }
      }
    }
  }
  
  
`;



const singleWinePage = ({ data }) => {

  const wine = data.winesJson;

  return (
    <Layout>
      <CardWrapper>
        <div className="wine-wrapper">
          <Image
            fixed={wine.image.childImageSharp.fixed}
            alt={wine.title}
            imgStyle={{ objectFit: 'contain' }}
            className="wine-wrapper"
          />
        </div>
        <div className="content-wrapper">
          <div>
            <h4>{wine.producer}</h4>
            <h3>{wine.name}</h3>
            <img
              src={wine.type.publicURL}
              id="icon-img" />
          </div>

          <div className="taste-text">
            <h4>Smakbild:</h4>
            <p>{wine.text}</p>
          </div>
          {wine.number ? <h5>ART:NR: {wine.number}</h5> : null}
          {wine.link ? <a href={wine.link} target="_blank" id="systemet">Visa på systembolaget</a> : null}
          <div className="goes-with">
            <h4>Passar till:</h4>
            {wine.taste.map((icon) =>
              <img
                src={icon.url.publicURL}
                id="taste-img"
              />
            )}
          </div>

        </div>
      </CardWrapper >

      <MoreFactsWrapper>
        <h4>Mer fakta:</h4>
        <MoreFacts>
          <div className="test">
            <p>Land: {wine.country}</p>
            <p>Region: {wine.region}</p>
            <p>Producent: {wine.producer}</p>
          </div>
          <div className="test">
            <p>Druva: {wine.grape}</p>
            <p>Alkoholhalt: {wine.alcohol}</p>
            <p>Flaska: {wine.volume}</p>
          </div>
          <div className="test">
            <p>Syra: {wine.acid}</p>
            <p>Sötma: {wine.sweetness}</p>
            <p>Temperatur: {wine.temp}</p>
          </div>
        </MoreFacts>
      </MoreFactsWrapper>



    </Layout>
  )
};


export default singleWinePage;


const CardWrapper = styled.div`
${ tw` flex justify-center items-start  mt-10 mb-10`}
padding: 25px;
background: #fff;
border-radius: 5px;
font-family: Assistant;
@media (max-width: 740px) {
  ${ tw` flex-col items-center mb-0`}
    }

.wine-wrapper{
    max-width: 200px;
    max-height: 500px;
    margin-right: 130px;
    @media (max-width: 1060px) {
      margin-right: 130px;
    }
    @media (max-width: 740px) {
      margin-right: 0px;
      max-height: 350px; 
      margin-bottom: 25px;
     
    }
    @media (max-width: 480px) {
     
      max-height: 200px; 
     
    }
    
}

.content-wrapper{
  margin-left: 150px;
  @media (max-width: 1060px) {
      margin-left: 0px;
    }
  
    @media (max-width: 740px) {
      
      
      margin-left: 0px;
    }
  
}

#icon-img{
    ${ tw` mt-2`}
   max-width: 20px;
   min-width: 20px;
    max-height: 20px;
}

#taste-img{
    ${ tw` mr-3`}
   max-width: 25px;
   min-width: 25px;
    max-height: 20px;
}

.taste-text{
  max-width: 430px;
}

.goes-with{
  ${ tw` mt-2 `}
}

h2{
    font-family: Assistant;
    ${ tw` mb-2 `}
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

a{
  color: #2c2929;
    text-decoration: none;
}

#systemet{
  text-decoration: underline;
}

img{
  ${ tw`mb-2`}
}

`

const MoreFactsWrapper = styled.div`
${ tw` flex justify-center items-center flex-col `}
/* margin-top: 30px;
margin-bottom: 50px; */
height: auto;
/* background: #fffbfb;  */
/* background: linear-gradient(to bottom , #fffbfb, white); */


h4{
    font-family: Assistant;
    ${ tw` mb-1  p-2 `}
    border-bottom-style: solid; 
border-bottom-width: 1px; 
border-bottom-color: #ececec; 
}


`

const MoreFacts = styled.div`
${ tw` grid grid-cols-3 gap-2 `}
padding:20px;
margin-top: 50px;
margin-bottom: 50px; 
text-align: start; 
border-top-style: solid; 
border-top-width: 1px; 
border-top-color: #efefef; 
border-bottom-style: solid; 
border-bottom-width: 1px; 
border-bottom-color: #efefef; 
@media (max-width: 1060px) {
  ${ tw`grid-cols-1 gap-5`}
  margin-top: 30px;
margin-bottom: 30px;
    }

.test{
  ${ tw``}
  justify-self: center;
  margin-left: 50px;
  margin-right: 50px;
  

  @media (max-width: 1060px) {
  justify-self: start;
    }
}


.underline{
  text-decoration: underline;
}

p{
  font-family: Assistant;
    ${ tw` mb-2 `}
    font-size: 90%;
}

h2{
    font-family: Assistant;
    ${ tw` mb-2 `}
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

`