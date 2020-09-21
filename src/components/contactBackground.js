import React from 'react';
import styled from 'styled-components';
import { graphql, StaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';



const BgImage = () => (
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
                <Wrapper>
                    <BackgroundImage
                        fluid={imageData}
                        fadeIn
                        className="img">

                    </BackgroundImage>
                </Wrapper>
            );
        }}
    />
);

export default BgImage;


const Wrapper = styled.div`

.img{
    
}
`