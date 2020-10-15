import React from 'react'
import { GlobalStyle } from '../components/globalStyle'
import SEO from '../components/seo';
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"
import tw from 'twin.macro'
import logo from '../images/logo-white-text.svg'
import { navigate } from "gatsby";

export const query = graphql`
query HomePageQuery {
    prismic {
      allHome_pages {
        edges {
          node {
            insta_embed
            logo
            title
            background_image
            background_imageSharp {
              childImageSharp {
                fluid(maxWidth: 1080, quality: 100) {
                    ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
  `


export const HomePage = (props) => {

const data = props.data.prismic.allHome_pages.edges[0].node
console.log(props.data.prismic.allHome_pages) 



return(
<>
			<GlobalStyle />
			<Layout >
            <Container>
            <BackgroundImage
            fluid={data.background_imageSharp.childImageSharp.fluid}
            className="bg-image"
            alt={data.background_image.alt}
            imgStyle={{ objectPosition: '100 500' }}
        >
            <div className="bg-content-wrapper">
                <img src={logo} alt={data.logo.alt} id="logo"></img>
				<h1>{data.title}</h1>
                <button onClick={() => navigate(`/sortiment`)}>Sortiment</button>
            </div>
				<SEO title="Hem" keywords={[`Brand Wine Estates`, `Wine import`, `Simpsons Wine`, `hem`]} />
                </BackgroundImage>
    </Container>
			</Layout>
		</>
)

}

export default HomePage


export const Container = styled.div `
display: flex;
justify-content: center;


.bg-image{
   height: calc(100vh - 108px);
   width: 100%;
   padding: 0;
   margin: 0;
    @media (max-width: 480px) {
        height: calc(100vh - 96px);
    }
   /*  @media (max-height: 725px) {
        height: auto;
    } */
  

    .bg-content-wrapper{
    height: calc(100vh - 108px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    background-color: rgb(0 0 0 / 17%);
    @media (max-width: 480px) {
        height: calc(100vh - 96px);
    }
   /*  @media (max-height: 725px) {
        height: auto;
    } */

        button{
        width: 130px;
        height: 40px;
        font-size: smaller;
        background-color: #bf5052;
        border: none;
        color: #fff;
        border-radius: 2px;
        transition: 0.3s ease-in-out;
        &:hover{
            background-color: white;
            transition: 0.3s ease-in-out;
            color: black;
        }
        &:active{
            background-color: black;
            border: none;
           
        }
        
    }

    h1{
        font-family: PT Serif;
        margin-bottom: 100px;
        @media (max-width: 705px) {
        font-size: 30px;
        }
        @media (max-width: 480px){
        font-size: 20px;
        margin-bottom: 50px;
    }
        @media (max-width: 780px) and (max-height: 440px) {
        font-size: 20px;
        margin-bottom: 50px;
    }
    }

    #logo{
        width: 250px;
        margin-bottom: 100px;
        @media (max-width: 480px) {
        width: 190px;
        margin-bottom: 50px;
    }
    @media (max-width: 780px) and (max-height: 440px) {
        width: 190px;
        margin-bottom: 50px;
    }

    }
    }

}


`