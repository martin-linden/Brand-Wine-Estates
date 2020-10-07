import React from "react"
import Layout from "../components/layout"
import { graphql } from 'gatsby'
import ProductList from '../components/productList'
import styled from "styled-components"
import tw from 'twin.macro'
import { GlobalStyle } from '../components/globalStyle'





export const query = graphql`
query ProductListQuery {
	prismic {
	  allWine_lists {
		edges {
		  node {
			body {
			  ... on PRISMIC_Wine_listBodyWine_list {
				fields {
				  country
				  name
				  producer
				  type
				  year
				  wine_image
				  wine_imageSharp {
					childImageSharp {
					  fluid {
						...GatsbyImageSharpFluid
					  }
					}
				  }
				  link {
					... on PRISMIC_Single_wine_page {
					  _meta {
						uid
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



const restaurantPage = (props, i) => {

	/* console.log(props.data.prismic.allWine_lists.edges[0].node.body[0].fields) */

	const content = props.data.prismic.allWine_lists.edges[0].node.body[0].fields;



	return (
		<>
			<GlobalStyle />
			<Container>
				<Layout>
					<ProductList
						key={i}
						data={content} />
				</Layout>
			</Container>
		</>
	)
};

export default restaurantPage

export const Container = styled.div`

`