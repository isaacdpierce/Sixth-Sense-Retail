/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import styled from "@emotion/styled"
import { MDXRenderer } from "gatsby-plugin-mdx"
import PostBgImage from "./postBgImage"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Main from "../components/main/main"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import MiniBio from "../components/bio/miniBio"

// TODO Get image loading working

const ImgWrapper = styled.div`
  width: 100vw;
  opacity: 0.1;
  position: fixed;
  top: 0;
`

export default function PageTemplate({ data: { mdx, site } }) {
  console.log(mdx.frontmatter.featuredImage)

  return (
    <Layout>
      <ImgWrapper>
        <PostBgImage />
      </ImgWrapper>
      <Main>
        <SEO title={`${site.siteMetadata.author} — ${mdx.frontmatter.title}`} />
        <h1>{mdx.frontmatter.title}</h1>
        {/* <Img fluid={mdx.frontmatter.featuredImage.childImageSharp.fluid} /> */}
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
        date
        featuredImage
      }
    }
  }
`
