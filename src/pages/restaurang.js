import React from "react"
import Layout from "../components/layout"
import { graphql } from 'gatsby'
import ProductList from '../components/productList'
import styled from "styled-components"
import tw from 'twin.macro'
import { GlobalStyle } from '../components/globalStyle'
import SEO from '../components/seo';
import Terms from '../components/terms'





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
				  link {
					... on PRISMIC_Single_wine_page {
					  _meta {
						uid
					  }
					}
				  }
				  region
				  price
				}
			  }
			  ... on PRISMIC_Wine_listBodyPrislista___villkor {
				type
				label
				primary {
				  terms
				  price_list {
					_linkType
					... on PRISMIC__FileLink {
					  _linkType
					  url
					  name
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




	const content = props.data.prismic.allWine_lists.edges[0].node.body[1].fields;
	const termsContent = props.data.prismic.allWine_lists.edges[0].node.body[0].primary.terms;
	const termsPdf = props.data.prismic.allWine_lists.edges[0].node.body[0].primary.price_list.url
	/* 	console.log(props.data.prismic.allWine_lists.edges[0].node.body[0].primary.price_list.url) */



	return (
		<>
			<GlobalStyle />
			<Container>
				<Layout>

					<ProductList
						key={i}
						data={content}
					/>
					<Terms
						data={termsContent}
						pdf={termsPdf}
					/>
					<SEO title="Restaurang" keywords={[`Restaurang`, `Prislista`, `produktblad`]} />
				</Layout>
			</Container>
		</>
	)
};

export default restaurantPage

export const Container = styled.div`

`