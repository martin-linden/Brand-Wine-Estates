import React from 'react'
import { GlobalStyle } from '../components/globalStyle'
import SEO from '../components/seo';
import Layout from '../components/layout'
import WineList from '../components/wineList'


import { Helmet } from 'react-helmet'

const IndexPage = () => (
	<Layout>
		<WineList />
		<Helmet>
			<title>Brand Wine Estates</title>
			<meta
				name="description"
				content="Wine Import - Wine Producers, Simpsons, Flint Fields, Wine, Vin"
			/>
			<meta property="og:title" content="Martin Linden - Front-End Developer" />
		</Helmet>
		<GlobalStyle />

		<SEO title="Home" keywords={[`Brand Wine Estates`, `Wine import`, `Simpsons Wine`]} />

	</Layout>
);

export default IndexPage;
