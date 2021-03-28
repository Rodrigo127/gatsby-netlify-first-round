/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const dotenv = require('dotenv');
dotenv.config();

exports.createPages = ({ actions, graphql }) => {
    actions.createPage({
        path: `/page-4`,
        component: require.resolve("./src/templates/repositories.js"),
        context: {
            login: `${process.env.GITHUB_LOGIN}`
        }
    })
}