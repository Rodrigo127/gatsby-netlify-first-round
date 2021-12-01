/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const dotenv = require('dotenv');
const fs = require('fs'); 
dotenv.config();

const redirectList = [
    {fromPath: `/commits-old`, toPath: `/commits`, statusCode: `301`},
    {fromPath: `/commits-old-2`, toPath: `/commits`, statusCode: `301`}
]

const redirectsFile = "./static/_redirects";

function resetRedirectFile() {
  fs.writeFile(redirectsFile, "", function (err) {
    if (err) throw err
    console.log("_redirects reseted!")
  })
}

function createRedirectFile(content) {
  resetRedirectFile();
  redirectList.forEach(element => {
    const redirect = `${element.fromPath}         ${element.toPath}              ${element.statusCode}\n`;
    fs.appendFile(redirectsFile, redirect, function (err) {
        if (err) throw err
        console.log(`Redirect added: ${redirect}`)
    });
  });
}

//createRedirectFile(redirectList);

exports.createPages = ({ actions, graphql }) => {
    const { createPage, createRedirect } = actions;
    createPage({
        path: `/`,
        component: require.resolve("./src/templates/profile.js"),
        context: {
            login: `${process.env.GITHUB_LOGIN}`
        }
    })
    createPage({
        path: `/commits`,
        component: require.resolve("./src/templates/commits.js"),
        context: {
            login: `${process.env.GITHUB_LOGIN}`,
            repository: `${process.env.GITHUB_REPOSITORY_EXAMPLE}`,
            branch: `${process.env.GITHUB_REPOSITORY_EXAMPLE_BRANCH}`
        }
    })
    createPage({
        path: `/following`,
        component: require.resolve("./src/templates/following.js"),
        context: {
            login: `${process.env.GITHUB_LOGIN}`
        }
    })

    createRedirect({
      fromPath: `/commits-old-3`,
      toPath: `/commits`,
    })
}