import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from "../components/layout"
import SEO from "../components/seo"

const RepoPage = ({data}) => {
    return(
        <Layout>
        <SEO title="Page repositories" />
        <h1>Hi from these are my repositories</h1>
        {data.q2.user.repositories.edges.map((repo)=>{
          return <p>{repo.node.name}</p>
        })}
        <Link to="/">Go back to the homepage</Link>
      </Layout>
    )
}

export const query = graphql`
query($login: String!){ 
  q2: github {
    user(login: $login) {
      repositories(first: 5) {
        edges {
          node{
            name
            id
          }
          cursor
        }
      }
    }
  }
}
`
export default RepoPage;