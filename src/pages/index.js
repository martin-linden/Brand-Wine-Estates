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



const IndexPage = (props, i) => {



	console.log(props.location.pathname);

	const content = props.data.prismic.allWine_lists.edges[0].node.body[0].fields

	/* console.log(content); */

	return (
		<Layout >

			<WineList
				data={content}
				key={i} />

			<Helmet>
				<title>Brand Wine Estates</title>
				<meta
					name="description"
					content="Brand Wine Estates work with producers from the classic wine countries and regions of Europe"
				/>
				<meta property="og:title" content="Martin Linden - Front-End Developer" />
			</Helmet>
			<GlobalStyle />

			<SEO title="Home" keywords={[`Brand Wine Estates`, `Wine import `, `Simpsons Wine`]} />

		</Layout>
	)
};

export default IndexPage;
