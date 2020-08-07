import React from 'react'
import { GlobalStyle } from '../components/globalStyle'
import SEO from '../components/seo';
import Layout from '../components/layout'
import WineList from '../components/wineList'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'


export const test = graphql`
query  {
	allWinesJson {
	  nodes {
		grape
		id
		country
		name
		number
		producer
		slug
		year
		image {
		  childImageSharp {
			fluid {
				...GatsbyImageSharpFluid
			}
		  }
		}
		type {
		  publicURL
		}
	  }
	}
  }
`;



const IndexPage = (data) => {

	const wineCardData = data.data.allWinesJson.nodes

	/* console.log(props);
	console.log(postData); */
	console.log(wineCardData);


	return (
		<Layout>
			<WineList
				wineCardData={wineCardData} />
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
