import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import Img from "gatsby-image"

const HeaderBgImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "arc-1.jpg" }) {
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

export default HeaderBgImage
