import * as React from "react"

import LayoutGitBlog from "../components/layout-git-blog"
import CardProfile from "../components/section-profile"
import RepositoriesSection from "../components/section-repositories"
import SEO from "../components/seo"

import { graphql } from 'gatsby';

const IndexPage = ({data}) => (
  <LayoutGitBlog brand={data.q2.user.login}>
    <SEO title="Home Page" />
    <CardProfile profile={data.q2.user} />
    <RepositoriesSection repositories={data.q2.user.repositories} />
  </LayoutGitBlog>
)

export default IndexPage

export const pageQuery = graphql`
query($login: String!){ 
  q2: github {
    user(login: $login) {
      name
      url
      avatarUrl(size: 300)
      bio
      company
      twitterUsername
      websiteUrl
      login
      location
      repositories(first: 100, orderBy: {field: CREATED_AT, direction: DESC}) {
        nodes {
          name
        }
      }
    }
  }
}
`
