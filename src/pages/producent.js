import React from "react"
import ProducerList from "../components/producerList"
import Layout from "../components/layout"
import { producerData } from '../components/producers.js'
import { graphql } from 'gatsby'


export const query = graphql`
query ProducerQuery {
  prismic {
    allTests {
      edges {
        node {
          _meta {
            id
          }
          test_title
        }
      }
    }
  }
}

  `;



const Producers = (props) => {

  console.log(props.data.prismic.allTests.edges);

  console.log(props.data.prismic.allTests.edges[0].node._meta.id);

  /*  const ProducerData = data.data.allWinesJson.nodes */
  return (
    <Layout>
      <ProducerList producerData={producerData} />
    </Layout>
  )
};

export default Producers
