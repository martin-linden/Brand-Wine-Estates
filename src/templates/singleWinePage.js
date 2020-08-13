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
      {/* <h4 id="center-text">Mer fakta:</h4> */}
      <MoreFacts>
        <div>
          <div>
            <p>Land: {wine.country}</p>
            <p>Region: {wine.region}</p>
            <p>Producent: {wine.producer}</p>
          </div>
          <div>
            <p>Druva: {wine.grape}</p>
            <p>Alkoholhalt: {wine.alcohol}</p>
            <p>Flaska: {wine.volume}</p>
          </div>
          <div>
            <p>Syra: {wine.acid}</p>
            <p>Sötma: {wine.sweetness}</p>
            <p>temperatur: {wine.temp}</p>
          </div>
        </div>
      </MoreFacts>



    </Layout>
  )
};


export default singleWinePage;


const CardWrapper = styled.div`
${ tw` flex justify-around items-start flex-wrap mt-10 mb-10`}
padding: 20px;
background: #fff;
border-radius: 5px;
font-family: Assistant;
@media (min-width: 2200px) {
    margin-left: 350px;
    margin-right: 350px;
    }

.wine-wrapper{
    max-width: 200px;
    max-height: 500px;
    
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

#systemet{
  text-decoration: underline;
}

img{
  ${ tw`mb-2`}
}

`

const MoreFacts = styled.div`
${ tw` flex justify-around`}
margin-top: 100px;
text-align: start;

@media (min-width: 2200px) {
    margin-left: 350px;
    margin-right: 350px;
    }
    
    @media (max-width: 1060px) {
      ${ tw`flex-col  items-center`}
    }

.underline{
  text-decoration: underline;
}

p{
  font-family: Assistant;
    ${ tw` mb-2 `}
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