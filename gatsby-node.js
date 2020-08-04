/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const postData = require('./wines.js')

exports.createPages = async ({ actions: { createPage } }) => {
    console.log(postData)
    return postData.forEach(wine =>
        createPage({
            path: `/wines/${wine.id}`, // /wines/1
            component: require.resolve('./src/templates/singleWinePage.js'),
            context: {
                content: wine,
            },
        })
    )
}