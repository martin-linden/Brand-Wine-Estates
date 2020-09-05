import React from "react"
import Layout from "../components/layout"
import { graphql } from 'gatsby'
import ProductList from '../components/productList'
import styled from "styled-components"
import tw from 'twin.macro'

export const query = graphql`
query RestaurantQuery {
    prismic {
      allSingle_wine_pages {
        edges {
          node {
            _meta {
              id
            }
            name
            grape
            acidity
            alcohol
            country
            number
            producer
          }
        }
      }
    }
  }
  `


const restaurantPage = (props, i) => {

    /*  console.log(props.data.prismic.allSingle_wine_pages.edges); */

    const content = props.data.prismic.allSingle_wine_pages.edges;
    console.log(content);


    return (
        <Layout>
            <ProductList
                key={i}
                data={content} />
        </Layout>
    )
};

export default restaurantPage