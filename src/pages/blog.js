/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Main from "../components/main/main"
import { useStaticQuery, graphql } from "gatsby"
import PostList from "../components/post/postList"
import BgImage from "../components/background/bgImage"

const StyledBg = styled.div`
  grid-column: 1/ -1;
  grid-row: 1/ -1;
`

export default () => {
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

  return (
    <Layout>
      <SEO title="Blog" />
      <Main>
        <h1 sx={{ fontSize: 7 }}>Oh what a lovely day.</h1>
        <PostList />
      </Main>
      <StyledBg>
        <BgImage
          className="blog"
          fluid={data.placeholderImage.childImageSharp.fluid}
        />
      </StyledBg>
    </Layout>
  )
}
