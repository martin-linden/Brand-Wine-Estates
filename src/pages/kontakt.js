import React from "react"
import Layout from "../components/layout"
import SEO from '../components/seo';
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
import InstaLogo from '../images/insta-logo.svg'
import LinkedinLogo from '../images/linkedin-logo.svg'




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
                    fluid(maxWidth: 800, quality: 60) {
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
          className="overlay"
          backgroundColor={`#040e18`}
          fadeIn={true}
        >
          <div className="intro-wrapper">
          <div className="contact-intro">
  <h2>Kontakta oss</h2>
</div>
          <img src={PaperPlane} className="paper-plane" alt="icon of paper plane"></img>
          </div>
        </BackgroundImage>
      </BgWrapper>
      <ContactWrapper>
        <div className="top-wrapper">
        <div className="content-wrapper">
            <div className="content-text-wrapper">
              <div className="contact-intro">
                <h3>{data.contact_name}</h3>
                <h3>{data.job_title}</h3>
              </div>
              <div className="contact-image-wrapper">
                <Image
                  fixed={data.contact_imageSharp.childImageSharp.fixed}
                  alt={data.contact_image.alt}
                  imgStyle={{ objectFit: 'cover' }}
                  style={{ maxWidth: 180, maxHeight: 180 }}
                  className="contact-image"
                />
              </div>

              <div className="contact-content">
                <img src={PhoneLogo} alt="mail icon" className="icon" />
                <h4>{data.phone_number}</h4>
              </div>

              <div className="contact-content ">
                <img src={MailLogo} alt="phone icon" className="icon" />
                <a href={data.email.url}>frida@brandwineestates.com</a>
              </div>

              <div className="contact-content ">
                <img src={InstaLogo} alt="instagram logotype" className="icon" />
                <a href="https://www.instagram.com/brandwineestates/?hl=sv">Instagram</a>
              </div>

              <div className="contact-content ">
                <img src={LinkedinLogo} alt="linkedIn logotype" className="icon" />
                <a href="https://www.linkedin.com/company/bwe-brand-wine-estates/">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </ContactWrapper>
      <SEO title="Kontakta oss" keywords={[`Kontakt`, `Frida Brunnström`, `frida@brandwineestates.com`]} />
    </Layout>







  )
};

export default ContactPage


const BgWrapper = styled.div`


.overlay{
  height: 300px;

  @media (max-width: 700px) {
    height:200px;
    }
}

.intro-wrapper{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  height: 100%;
  /* background: rgb(0 0 0 / 15%); */

}

.paper-plane{
    width: 60px;
    margin: 0px;
  /*   margin-top: 15px; */
  }
`

const ContactWrapper = styled.div`
${tw`flex  `}
/* padding: 25px; */
/* background: #fafafa; */
justify-content: center;
margin-left: auto;
margin-right: auto;
/* max-width: 1500px; */
/* margin-top: 50px; */
/* color: white; */

.top-wrapper{
/*   margin-top: 25px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
}

.contact-image-wrapper{
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}



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

 h3{
   font-weight: lighter;
 }

.icon{
  width: 35px;
  margin-right: 10px;
}
.icon2{

  width: 33px;
}

.content-wrapper{
  ${tw`flex items-center justify-center `}
  @media (max-width: 612px) {
  ${tw`flex flex-col`}
  
    }
}

/* .content-text-wrapper{
  padding: 35px;
} */

.contact-content{
  ${tw`flex`}
  align-items: center;
  padding: 20px;
  padding-left: 0px;

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
   /*  margin-left: 35px; */
   margin-top: 40px;
   margin-bottom: 20px;


  }

  a{
    text-decoration: none;
    color: black;
  }



.plane-wrapper{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 50px;
  margin: 50px;
}

`
