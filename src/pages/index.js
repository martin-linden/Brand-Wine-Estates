import React from 'react';
import Helmet from 'react-helmet';
import ConstructionHeroCard from '../components/constructionHeroCard';

const IndexPage = () => (
	<React.Fragment>
		<Helmet>
			<title>Brand Wine Estates</title>
			<meta
				name="description"
				content="Wine Import - Wine Producers, Simpsons, blanc de noirs, Flint Fields, Wine, Vin, Vinimport, Systembolaget, Brand Wine Estates, Frida Brunnström"
			/>
			<meta property="og:title" content="Brand Wine Estates" />
		</Helmet>

		<ConstructionHeroCard />
	</React.Fragment>
);

export default IndexPage;
