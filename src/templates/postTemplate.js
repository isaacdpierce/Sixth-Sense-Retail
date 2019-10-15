/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import styled from "@emotion/styled"
import { MDXRenderer } from "gatsby-plugin-mdx"
import PostBgImage from "./postBgImage"
import Layout from "../components/layout"
import Main from "../components/main/main"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import MiniBio from "../components/bio/miniBio"

const ImgWrapper = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  width: 100vw;
  opacity: 0.1;
`

export default function PageTemplate({ data: { mdx, site } }) {
  return (
    <Layout>
      <ImgWrapper>
        <PostBgImage />
      </ImgWrapper>
      <Main>
        <SEO title={`${site.siteMetadata.author} — ${mdx.frontmatter.title}`} />
        <h1>{mdx.frontmatter.title}</h1>
        <div sx={{ mb: 7, fontSize: 3 }}>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </div>
        <MiniBio />
      </Main>
    </Layout>
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
