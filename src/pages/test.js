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

    console.log(props);

    return (


        <h1>Testing</h1>


    )
};

export default Test
