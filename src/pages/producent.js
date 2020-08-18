import React from "react"
import ProducerList from "../components/producerList"
import Layout from "../components/layout"
import { producerData } from '../components/producers.js'
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
                image
                name
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

  /*   console.log(props.data.prismic.allProducers.edges[0].node.body[0].fields); */
  const content = props.data.prismic.allProducers.edges[0].node.body[0].fields;
  /*  console.log(content); */

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
