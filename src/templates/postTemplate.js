import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Main from "../components/main/main"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import MiniBio from "../components/bio/miniBio"

export default function PageTemplate({ data: { mdx, site } }) {
  return (
    <Main>
      <SEO title={`${site.siteMetadata.author} — ${mdx.frontmatter.title}`} />
      <h1>{mdx.frontmatter.title}</h1>
      <MDXRenderer>{mdx.body}</MDXRenderer>
      <MiniBio />
    </Main>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    site {
      siteMetadata {
        author
      }
    }
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`
