import * as React from "react"

import LayoutGitBlog from "../components/layout-git-blog"
import SEO from "../components/seo"

import { graphql } from 'gatsby';

const IndexPage = ({data}) => (
  <LayoutGitBlog>
    <SEO title="Home Page" />
  </LayoutGitBlog>
)

export default IndexPage

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
