import React from "react"
import Layout from "../components/layout"
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import MailLogo from '../images/mail-logo.svg'
import PhoneLogo from '../images/phone-logo.svg'
import InstaLogo from '../images/insta-logo.svg'
import FacebookLogo from '../images/facebook-logo.svg'
import LinkedinLogo from '../images/linkedin-logo.svg'
import styled from "styled-components"
import tw from 'twin.macro'


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

  console.log(props.data.prismic.allContacts.edges[0].node.body[0]);
  const data = props.data.prismic.allContacts.edges[0].node.body[0].primary;

  return (
    <Layout>
      <ContactWrapper>
        <div>
          <div className="contact-intro">
            <h3>{data.contact_name}</h3>
            <h3>{data.job_title}</h3>
          </div>
          <hr></hr>
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

              <div className="contact-content">
                <img src={MailLogo} alt="phone logotype" className="icon" />
                <a href={data.email.url}>frida@brandwineestates.com</a>
              </div>
            </div>

          </div>
          <hr></hr>
          <h3 className="contact-logo-text">Kontakta Brand Wine Estates på sociala medier</h3>
          <div className="contact-logo-wrapper">
            <a href="https://www.instagram.com/brandwineestates/?hl=sv"><img src={InstaLogo} alt="phone logotype" className="icon2" /></a>
            <img src={FacebookLogo} alt="phone logotype" className="icon2" />
            <a href="https://www.linkedin.com/company/bwe-brand-wine-estates/"><img src={LinkedinLogo} alt="phone logotype" className="icon2" /></a>
          </div>
        </div>
      </ContactWrapper>
    </Layout>
  )
};

export default ContactPage


const ContactWrapper = styled.div`
${ tw`flex items-center flex-col`}
padding-left: 10px;
padding-right: 10px;
margin-top: 60px;



.icon{
  width: 27px;
  margin-right: 10px;
}
.icon2{

  width: 33px;
}

.content-wrapper{
  ${ tw`flex items-center p-4 `}
  @media (max-width: 612px) {
  ${ tw`flex flex-col`}
  
    }
}

.content-text-wrapper{
  padding: 35px;
}

.contact-content{
  ${ tw`flex`}
}

.contact-image{
  clip-path: circle(50% at 50% 50%);
}

  .contact-logo-wrapper{
    ${ tw`flex justify-around items-center`}
   
    
  }

  .contact-logo-text{
    ${ tw`flex justify-center`}
    margin-top: 10%;
    margin-bottom: 10%;
    text-align: center;
  }

  .contact-intro{
    ${ tw`flex flex-col items-start`}
  }

  a{
    text-decoration: none;
    color: black;
  }


`
