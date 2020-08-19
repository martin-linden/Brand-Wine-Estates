import React from 'react'
import { graphql } from 'gatsby'
import Layout from "../components/layout"

export const query = graphql`
query SingleProducerQuery($id: String) {
  prismic {
    allSingle_producer_pages(id: $id) {
      edges {
        node {
          _meta {
            uid
          }
          producer
        }
      }
    }
  }
}

`;

const SingleProducerPage = (props) => {

  console.log(props.data.prismic.allSingle_producer_pages.edges[0].node);

  const content = props.data.prismic.allSingle_producer_pages.edges[0].node;

  return (
    <Layout>
      {content.producer}
    </Layout>
  )
}

export default SingleProducerPage;