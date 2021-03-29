import * as React from "react"

import LayoutGitBlog from "../components/layout-git-blog"
import FollowingSection from "../components/section-following"
import SEO from "../components/seo"

import { graphql } from 'gatsby';

const FollowingPage = ({data}) => (
  <LayoutGitBlog brand={data.github.user.login}>
    <SEO title="Following Page" />
    <FollowingSection login={data.github.user.login} 
      following={data.github.user.following} />
  </LayoutGitBlog>
)

export default FollowingPage

export const pageQuery = graphql`
{
  github {
   user(login: "Rodrigo127") {
      name
      login
      following(first: 100){
        nodes{
          name
          login
          url
          repositories(first: 5, orderBy: {field: CREATED_AT, direction: DESC}){
            nodes{
              name
              url
            }
          }
        }
      }
    }
  }
}
`
