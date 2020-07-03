import React from 'react';
import { Link } from 'gatsby';
import GlobalStyle from '../components/globalStyle';

import Layout from '../components/layout';
import Image from '../components/image';
import { Container } from '../components/layoutComponents';
import SEO from '../components/seo';
import UnderConstruction from '../components/underConstruction';

const IndexPage = () => (
	<React.Fragment>
		<GlobalStyle />
		<UnderConstruction>
			<SEO title="Home" keywords={[ `gatsby`, `application`, `react` ]} />
		</UnderConstruction>
	</React.Fragment>
);

export default IndexPage;
