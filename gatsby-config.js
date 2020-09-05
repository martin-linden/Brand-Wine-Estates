require(`dotenv`).config({ path: `.env.${process.env.NODE_ENV}` });

module.exports = {
	siteMetadata: {
		title: `Brand Wine Estates`,
		description: `Wine Import`,
		author: `Martin Lindén`
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images/`
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `data`,
				path: `${__dirname}/src/data/`
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-transformer-json`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/wine.png` // This path is relative to the root of the site.
			}
		},
		`gatsby-plugin-styled-components`,
		{
			resolve: 'gatsby-source-prismic-graphql',
			options: {
				repositoryName: 'brandwineestates',
				pages: [
					{
						type: 'Single_Producer_Page',
						match: '/:uid',
						path: '/',
						component: require.resolve('./src/templates/singleProducerPage.js')
					},
					{
						type: 'Single_Wine_Page',
						match: '/:uid',
						path: '/',
						component: require.resolve('./src/templates/singleWinePage.js')
					}
				]
			}
		},
		{
			resolve: `gatsby-plugin-styled-components`,
			options: {
				// Add any options here
			},
		},
		{
			resolve: `gatsby-plugin-typography`,
			options: {
				pathToConfigModule: `src/utils/typography`,
			},
		}
	]
};

