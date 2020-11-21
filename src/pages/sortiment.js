import React from 'react'
import { GlobalStyle } from '../components/globalStyle'
import SEO from '../components/seo';
import Layout from '../components/layout'
import WineList from '../components/wineList'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'






export const query = graphql`
query WineListQuery {
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



const SortimentPage = (props, i) => {


	console.log(props);


	const content = props.data.prismic.allWine_lists.edges[1].node.body[1].fields


	/* console.log(content); */

	return (
		<>
			<GlobalStyle />
			<Layout >
				<WineList
					data={content}
					key={i} />


				<SEO title="Sortiment" keywords={[`Brand Wine Estates`, `Wine import`, `Simpsons Wine`]} />

			</Layout>
		</>
	)
};

export default SortimentPage;
