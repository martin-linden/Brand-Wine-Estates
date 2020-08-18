import React from "react"
import { graphql } from 'gatsby'


export const query = graphql`
query TestQuery {
    prismic {
      allProducers {
        edges {
          node {
            body {
              ... on PRISMIC_ProducerBodyProducers {
                type
                label
                fields {
                  slug
                }
              }
            }
          }
        }
      }
    }
  }
  `;



const Test = (props) => {

    /* console.log(props.data.prismic.allProducers.edges[0].node.body[0].fields); */
    const test = props.data.prismic.allProducers.edges[0].node.body[0].fields;
    const result = test[0].slug
    console.log(result);


    return (


        <h1>Testing</h1>


    )
};

export default Test
