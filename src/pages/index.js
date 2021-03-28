import * as React from "react"

import LayoutGitBlog from "../components/layout-git-blog"
import SEO from "../components/seo"

import { graphql } from 'gatsby';

const IndexPage = ({data}) => (
  <LayoutGitBlog brand={data.q2.user.login}>
    <SEO title="Home Page" />
  </LayoutGitBlog>
)

export default IndexPage

export const pageQuery = graphql`
{ 
  q2: github {
    user(login: "Rodrigo127") {
      name
      url
      avatarUrl(size: 10)
      bio
      company
      twitterUsername
      websiteUrl
      login
    }
  }
}
`
