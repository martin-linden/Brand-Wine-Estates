import React from 'react';
import { GlobalStyle } from '../components/globalStyle';
import SEO from '../components/seo';
import UnderConstruction from '../components/underConstruction';
import { Helmet } from 'react-helmet';

const IndexPage = () => (
	<React.Fragment>
		<Helmet>
			<title>Brand Wine Estates</title>
			<meta
				name="description"
				content="Wine Import - Wine Producers, Simpsons, Flint Fields, Wine, Vin"
			/>
			<meta property="og:title" content="Martin Linden - Front-End Developer" />
		</Helmet>
		<GlobalStyle />
		<UnderConstruction>
			<SEO title="Home" keywords={[ `Brand Wine Estates`, `Wine import`, `Simpsons Wine` ]} />
		</UnderConstruction>
	</React.Fragment>
);

export default IndexPage;
