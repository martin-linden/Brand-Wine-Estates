import React from "react"
import ProducerList from "../components/producerList"
import Layout from "../components/layout"
import { producerData } from '../components/producers.js'
import { graphql } from 'gatsby'


export const query = graphql`
query MyQuery {
    prismic {
      allProducerss {
        edges {
          node {
            ttile
          }
        }
      }
    }
  }

  `;



const Producers = (props) => {

    console.log(props);

    /*  const ProducerData = data.data.allWinesJson.nodes */
    return (
        <Layout>
            <ProducerList producerData={producerData} />
        </Layout>
    )
};

export default Producers
