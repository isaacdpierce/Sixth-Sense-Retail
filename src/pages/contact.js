/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Main from "../components/main/main"
import { useStaticQuery, graphql } from "gatsby"
import BgImage from "../components/background/bgImage"

const StyledBg = styled.div`
  grid-column: 1/ -1;
  grid-row: 1/ -1;
`

export default () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "mall-3.jpg" }) {
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
      <SEO title="Contact" />
      <Main>
        <h1 sx={{ fontSize: 7 }}>We love to hear your ideas and questions.</h1>
        <h2>Never hesitate to contact us.</h2>
      </Main>
      <StyledBg>
        <BgImage
          className="contact"
          fluid={data.placeholderImage.childImageSharp.fluid}
        />
      </StyledBg>
    </Layout>
  )
}
