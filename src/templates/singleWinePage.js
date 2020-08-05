import React from "react"
import styled from "styled-components"
import tw from 'twin.macro'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'

export const query = graphql`
query ($slug: String!) {
	winesJson(slug: {eq: $slug}){
    grape
    name
    slug
    country
    producer
    year
    price
    image {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
}
`;


const singleWinePage = ({ data }) => {

    const wine = data.winesJson;

    return (

        <CardWrapper>
            <div className="hej">
                <Image
                    fluid={wine.image.childImageSharp.fluid}
                    alt={wine.title}
                />
            </div>

        </CardWrapper >
    )
};


export default singleWinePage;


const CardWrapper = styled.div`
${ tw`shadow flex flex-col justify-start items-center hover:shadow-lg cursor-pointer`}
height: 400px;
width: 200px;
padding: 20px;
background: #fff;
border-radius: 5px;
font-family: Assistant;

.hej{
    width: 70px;
    
   
   
}

`