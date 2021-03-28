import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { graphql } from 'gatsby';

const SecondPage = ({data}) => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2{data.q2.user.repositories.edges[0].node.name}</p>
    {data.q2.user.repositories.edges.map((repo)=>{
      return <p>{repo.node.name}</p>
    })}
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage

export const pageQuery = graphql`
{ 
  q2: github {
    user(login: "Rodrigo127") {
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
