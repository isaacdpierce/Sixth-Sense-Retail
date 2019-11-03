/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Main from "../components/main/main"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import PostList from "../components/post/postList"

const Figure = styled.figure`
  grid-column: 1/ -1;
  grid-row: 1/ -1;
  opacity: 0.5;
  z-index: -1;
`

const Blog = () => {
  return (
    <Layout>
      <SEO title="Blog" />
      <Main>
        <h1 sx={{ fontSize: 7 }}>Oh what a lovely day.</h1>
        <h3>Engage. Unconform.</h3>
        <PostList />
      </Main>
      <Figure>
        <BgImage />
      </Figure>
    </Layout>
  )
}

const BgImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "mall-4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default Blog
