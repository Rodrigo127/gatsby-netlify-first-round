import * as React from "react"

import LayoutGitBlog from "../components/layout-git-blog"
import CommitsSection from "../components/section-commits"
import SEO from "../components/seo"

import { graphql } from 'gatsby';

const SecondPage = ({data}) => (
  <LayoutGitBlog brand={data.q1.repository.owner.login}>
    <SEO title="Commits Page" />
    <CommitsSection repoName={data.q1.repository.name} commits={data.q1.repository.ref.target.history} />
  </LayoutGitBlog>
)

export default SecondPage

export const pageQuery = graphql`
{
    q1: github {
      repository(name: "gatsby-netlify-first-round", owner: "Rodrigo127") {
        name
        owner {
          login
        }
        ref(qualifiedName: "master") {
          target {
            ... on GitHub_Commit {
              history(first:100){
                nodes{
                    id
                    messageHeadline
                    oid
                    message
                    author {
                      name
                      email
                      date
                    }
                }
              }
            }
          }
        }
      }
    }
  }  
`
