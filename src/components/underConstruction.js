/* import React from 'react';
import styled from 'styled-components';
import { graphql, StaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import ConstructionHeroCard from '../components/constructionHeroCard';

const ConstructionWrapper = styled.div`
	padding: 0;
	margin: 0;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	@media (max-height: 400px) {
		height: 160vh;
	}
`;

const UnderConstruction = () => (
	<StaticQuery
		query={graphql`
			query {
				desktop: file(relativePath: { eq: "wine-yard.jpg" }) {
					childImageSharp {
						fluid(quality: 90, maxWidth: 1920) {
							...GatsbyImageSharpFluid_withWebp
						}
					}
				}
			}
		`}
		render={(data) => {
			// Set ImageData.
			const imageData = data.desktop.childImageSharp.fluid;
			return (
				<BackgroundImage Tag="section" fluid={imageData} classname= backgroundColor={`#040e18`} fadeIn>
					<ConstructionHeroCard />
				</BackgroundImage>
			);
		}}
	/>
);

export default UnderConstruction;
 */
