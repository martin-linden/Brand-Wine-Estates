import React from "react"
import Layout from "../components/layout"
import { graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import Image from 'gatsby-image'


export const query = graphql`
query MyQuery {
    prismic {
      allContacts {
        edges {
          node {
            body {
              ... on PRISMIC_ContactBodyContact {
                primary {
                  contact_content
                  contact_name
                  contact_image
                  contact_imageSharp {
                    childImageSharp {
                      fixed {
                        ...GatsbyImageSharpFixed
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

  console.log(props.data.prismic.allContacts.edges[0].node.body[0].primary.contact_image.alt);
  const contactInfo = props.data.prismic.allContacts.edges[0].node.body[0].primary;

  return (
    <Layout>
      <RichText render={contactInfo.contact_name} />
      <Image
        fixed={contactInfo.contact_imageSharp.childImageSharp.fixed}
        alt={contactInfo.contact_image.alt}
        imgStyle={{ objectFit: 'contain' }}
        style={{ maxWidth: 300 }}
      />
    </Layout>
  )
};

export default ContactPage
