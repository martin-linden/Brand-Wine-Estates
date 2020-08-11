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
            <h1>{wine.name}</h1>
            <img
              src={wine.type.publicURL}
              id="icon-img" />
          </div>
          <div>
            {wine.taste.map((icon) =>
              <img
                src={icon.url.publicURL}
                id="icon-img"
              />
            )}
          </div>
        </div>

      </CardWrapper >
    </Layout>
  )
};


export default singleWinePage;


const CardWrapper = styled.div`
${ tw` flex justify-around  items-center`}
height: auto;
width: auto;
padding: 20px;
background: #fff;
border-radius: 5px;
font-family: Assistant;

.wine-wrapper{
    max-width: 200px;
    max-height: 500px;
    
}

#icon-img{
    ${ tw` m-2`}
   max-width: 20px;
   min-width: 20px;
    max-height: 20px;
}



`