import React from "react"
import styled from "styled-components"
import tw from 'twin.macro'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import Layout from '../components/layout'
import { RichText } from 'prismic-reactjs'


export const query = graphql`
query SingleWineQuery($id: String) {
  prismic {
    allSingle_wine_pages(id: $id) {
      edges {
        node {
          _meta {
            id
          }
          name
          grape
          extern_link {
            ... on PRISMIC__ExternalLink {
              _linkType
              url
            }
          }
          acidity
          alcohol
          country
          number
          producer
          product_sheet {
            ... on PRISMIC__FileLink {
              _linkType
              url
            }
          }
          region
          sweetness
          temp
          text
          type
          volume
          year
          wine_image
          wine_imageSharp {
            childImageSharp {
              fixed {
                ...GatsbyImageSharpFixed
              }
            }
          }
          type_image
        }
      }
    }
  }
}

`;



const singleWinePage = (props) => {

  /*   console.log(props.data.prismic.allSingle_wine_pages.edges[0].node);
    console.log(props.data.prismic.allSingle_wine_pages.edges[0].node.extern_link.url); */

  const content = props.data.prismic.allSingle_wine_pages.edges[0].node;

  return (
    <Layout>
      <CardWrapper>
        <div className="wine-wrapper">
          <Image
            fixed={content.wine_imageSharp.childImageSharp.fixed}
            imgStyle={{ objectFit: 'contain' }}
            className="wine-wrapper"
          />
        </div>
        <div className="content-wrapper">
          <div>
            <h4>{content.producer}</h4>
            <h3>{content.name}</h3>
            <img
              src={content.type_image.url}
              id="icon-img" />
          </div>

          <div className="taste-text">
            <h4>Smakbild:</h4>
            <RichText render={content.text} />
          </div>
          {content.number ? <h5>ART:NR: {content.number}</h5> : null}
          {content.extern_link.url ? <a href={content.extern_link.url} target="_blank" id="systemet">Visa på systembolaget</a> : null}
          {/* <div className="goes-with">
            <h4>Passar till:</h4>
            {wine.taste.map((icon) =>
              <img
                src={icon.url.publicURL}
                id="taste-img"
              />
            )}
          </div>
 */}
        </div>
      </CardWrapper >

      <MoreFactsWrapper>
        <h4>Mer fakta:</h4>
        <MoreFacts>
          <div className="test">
            <p>Land: {content.country}</p>
            <p>Region: {content.region}</p>
            <p>Producent: {content.producer}</p>
          </div>
          <div className="test">
            <p>Druva: {content.grape}</p>
            <p>Alkoholhalt: {content.alcohol}</p>
            <p>Flaska: {content.volume}</p>
          </div>
          <div className="test">
            <p>Syra: {content.acidity}</p>
            <p>Sötma: {content.sweetness}</p>
            <p>Temperatur: {content.temp}</p>
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