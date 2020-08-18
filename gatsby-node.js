/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

// const postData = require('./wines.js')

exports.createPages = async ({ actions: { createPage }, graphql }) => {


    const results = await graphql(`
   {
    allWinesJson {
        edges {
          node {
            slug
          }
        }
      }
   }
   `);

    if (results.error) {
        console.error('something');

        return;
    }

    results.data.allWinesJson.edges.forEach(edge => {
        const wines = edge.node;

        createPage({
            path: `/wines/${wines.slug}/`,
            component: require.resolve('./src/templates/singleWinePage.js'),
            context: {
                slug: wines.slug,
            },
        })
    })
}

exports.createPages = async ({ actions: { createPage }, graphql }) => {


    const prismicResults = await graphql(`
    {
        prismic {
          allProducers {
            edges {
              node {
                body {
                  ... on PRISMIC_ProducerBodyProducers {
                    type
                    label
                    fields {
                      slug
                    }
                  }
                }
              }
            }
          }
        }
      }
   `);

    if (prismicResults.error) {
        console.error('something');

        return;
    }

    prismicResults.data.prismic.allProducers.edges[0].node.body[0].fields.forEach(field => {
        const producers = field.slug;

        createPage({
            path: `/producers/${producers}/`,
            component: require.resolve('./src/templates/singleProducerPage.js'),
            context: {
                slug: producers,
            },
        })
    })
}