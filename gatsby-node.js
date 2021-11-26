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
        path: `/`,
        component: require.resolve("./src/templates/profile.js"),
        context: {
            login: `${process.env.GITHUB_LOGIN}`
        }
    })
    actions.createPage({
        path: `/commits`,
        component: require.resolve("./src/templates/commits.js"),
        context: {
            login: `${process.env.GITHUB_LOGIN}`,
            repository: `${process.env.GITHUB_REPOSITORY_EXAMPLE}`,
            branch: `${process.env.GITHUB_REPOSITORY_EXAMPLE_BRANCH}`
        }
    })
    actions.createPage({
        path: `/following`,
        component: require.resolve("./src/templates/following.js"),
        context: {
            login: `${process.env.GITHUB_LOGIN}`
        }
    })
}