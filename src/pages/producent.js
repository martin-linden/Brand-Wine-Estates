import React from "react"
import ProducerList from "../components/producerList"
import Layout from "../components/layout"
import { graphql } from 'gatsby'


export const query = graphql`
query producerListQuery {
  prismic {
    allProducers {
      edges {
        node {
          body {
            ... on PRISMIC_ProducerBodyProducers {
              type
              label
              fields {
                country
                slug
                image
                name
                imageSharp {
                  childImageSharp {
                    fluid {
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



const Producers = (props, i) => {


  const content = props.data.prismic.allProducers.edges[0].node.body[0].fields;


  return (
    <Layout>
      <ProducerList
        data={content}
        key={i}
      />
    </Layout>
  )
};

export default Producers
