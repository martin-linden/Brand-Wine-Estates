import React from "react"
import Layout from "../components/layout"
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import MailLogo from '../images/mail-logo.svg'
import PhoneLogo from '../images/phone-logo.svg'
import styled from "styled-components"
import tw from 'twin.macro'
import BackgroundImage from "gatsby-background-image"
import { MainWrapper } from "../components/layoutComponents"
import Bg from '../components/underConstruction'
import PaperPlane from '../images/paper-plane.svg'
import Header from '../components/header'
import { GlobalStyle } from "../components/globalStyle"




export const query = graphql`
query MyQuery {
  prismic {
    allContacts {
      edges {
        node {
          body {
            ... on PRISMIC_ContactBodyContact {
              primary {
                contact_name
                contact_image
                contact_imageSharp {
                  childImageSharp {
                    fixed {
                      ...GatsbyImageSharpFixed
                    }
                  }
                }
                email {
                  ... on PRISMIC__ExternalLink {
                    url
                  }
                }
                job_title
                phone_number
                background_image
                background_imageSharp {
                  childImageSharp {
                    fluid(maxWidth: 3080, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

  
  `;




const ContactPage = (props) => {

  /* console.log(props.data.prismic.allContacts.edges[0].node.body[0]); */
  const data = props.data.prismic.allContacts.edges[0].node.body[0].primary;
  /* console.log(data); */
  console.log(props);
  return (


    <Layout path={props.location.pathname}>
      <BgWrapper>
        <BackgroundImage
          fluid={data.background_imageSharp.childImageSharp.fluid}
          alt={data.background_image.alt}
          imgStyle={{ objectFit: 'cover' }}
          fadeIn
          className="overlay"
          backgroundColor={`#040e18`}

        >

        </BackgroundImage>
      </BgWrapper>
      <ContactWrapper>
        <div>
          <div className="plane-wrapper">
            <img src={PaperPlane} className="paper-plane"></img>
          </div>
          <div className="contact-intro">
            <h3>{data.contact_name}</h3>
            <h3>{data.job_title}</h3>
          </div>
          {/*  <hr></hr> */}
          <div className="content-wrapper">
            <Image
              fixed={data.contact_imageSharp.childImageSharp.fixed}
              alt={data.contact_image.alt}
              imgStyle={{ objectFit: 'cover' }}
              style={{ maxWidth: 180, maxHeight: 180 }}
              className="contact-image"
            />
            <div className="content-text-wrapper">
              <div className="contact-content">
                <img src={PhoneLogo} alt="mail logotype" className="icon" />
                <h4>{data.phone_number}</h4>
              </div>

              <div className="contact-content ">
                <img src={MailLogo} alt="phone logotype" className="icon" />
                <a href={data.email.url}>frida@brandwineestates.com</a>
              </div>
            </div>

          </div>
          {/*   <hr></hr> */}
          {/* <h4 className="contact-logo-text">Kontakta Brand Wine Estates på sociala medier</h4> */}
          <div className="contact-logo-wrapper ">
            <a href="https://www.instagram.com/brandwineestates/?hl=sv">Instagram</a>

            <a href="https://www.linkedin.com/company/bwe-brand-wine-estates/" >LinkedIn</a>
          </div>
        </div>
      </ContactWrapper>
    </Layout>







  )
};

export default ContactPage


const BgWrapper = styled.div`
height: 300px;

.overlay{
  height: 400px;
}
`

const ContactWrapper = styled.div`
${tw`flex items-center justify-center `}
padding: 50px;
/* background: linear-gradient(#e1e1e1 , #fff); */
margin-left: auto;
margin-right: auto;
/* max-width: 1500px; */
/* margin-top: 50px; */
/* color: white; */


a:hover{
     color: #cdcdcdee;
   }



 hr{
  border: 0; border-top: 1px solid white;
  border: 0; border-bottom: 1px solid white;
  margin-bottom: 25px;
  margin-top: 25px;
 }

 img{
   margin: 0;
 }

 h4{
   margin: 0;
 }

.icon{
  width: 27px;
  margin-right: 10px;
}
.icon2{

  width: 33px;
}

.content-wrapper{
  ${tw`flex items-center p-4 `}
  @media (max-width: 612px) {
  ${tw`flex flex-col`}
  
    }
}

.content-text-wrapper{
  padding: 35px;
}

.contact-content{
  ${tw`flex`}
  padding: 20px;
}

.contact-image{
  clip-path: circle(50% at 50% 50%);
 
}

  .contact-logo-wrapper{
    ${tw`flex justify-center items-center`}
    margin-bottom: 100px;
   a{
     margin-left: 15px;
     margin-right: 15px;
   }
   
    
  }

  .contact-logo-text{
    ${tw`flex justify-center`}
    margin-top: 10%;
    margin-bottom: 10%;
    text-align: center;
  }

  .contact-intro{
    ${tw`flex flex-col items-start`}
  }

  a{
    text-decoration: none;
    color: black;
  }

  .paper-plane{
    width: 100px;
  }

.plane-wrapper{
  display: flex;
  justify-content: center;
  padding: 50px;
  margin: 50px;
}

`
