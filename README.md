# Gatsby site and getting data from Github GraphQL API
Hello, if you want to test this repository, follow the next steps:  
This was built with:  
- node v13.7.0
1. Download the repository.
2. Run npm install inside the project folder.
3. Create a .env file inside the root folder, with the next keys and values:
   - GITHUB_LOGIN=Rodrigo127
      - It is the github user, you can get it from your profile. 
   - GITHUB_PERSONAL_ACCESS_TOKEN=a00000b9cde22406f000000g3hi4jkl5m7n00000
     - It is a github's personal access token (check this [link](https://github.com/settings/tokens)).
   - GITHUB_REPOSITORY_EXAMPLE=gatsby-netlify-first-round
   - GITHUB_REPOSITORY_EXAMPLE_BRANCH=master
4. Run gatsby develop.

## Interesting links:
- [Live example](https://hopeful-dubinsky-72b555.netlify.app/)
- [Node Version Manager](https://github.com/coreybutler/nvm-windows)
- [Personal Access Token](https://github.com/settings/tokens)
- [Configuration for graphql plugin](https://github.com/Rodrigo127/gatsby-netlify-first-round/blob/master/gatsby-config.js)
- [Github's GraphQL Explorer](https://docs.github.com/en/graphql/overview/explorer)
- [How to get commits history from API](https://gist.github.com/jonathansick/8bbe88a85addaeeea4e7fe9ef15b016b)

## Todo
- Improve style.
- Get more info from the API.
- Add more links.
- Create commits' pages for every repository.
- Pagination.

## Common error while testing
- The term 'gatsby' is not recognized as the name of a cmdlet, ...
  - This can be solved by installing gatsby globally with: npm install -g gatsby
