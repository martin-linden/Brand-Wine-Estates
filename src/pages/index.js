import React from 'react'
import { GlobalStyle } from '../components/globalStyle'
import SEO from '../components/seo';
import Layout from '../components/layout'
import WineList from '../components/wineList'
import { postData } from '../components/wines.js'





import { Helmet } from 'react-helmet'



const IndexPage = (props) => {

	/* console.log(props);
	console.log(postData); */


	return (
		<Layout>
			<WineList postData={postData} />
			<Helmet>
				<title>Brand Wine Estates</title>
				<meta
					name="description"
					content="Brand Wine Estates work with producers from the classic wine countries and regions of Europe"
				/>
				<meta property="og:title" content="Martin Linden - Front-End Developer" />
			</Helmet>
			<GlobalStyle />

			<SEO title="Home" keywords={[`Brand Wine Estates`, `Wine import`, `Simpsons Wine`]} />

		</Layout>
	)
};

export default IndexPage;
