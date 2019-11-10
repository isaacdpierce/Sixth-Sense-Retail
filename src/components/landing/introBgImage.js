import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BgImage from "../background/bgImage"

const IntroBgImage = ({ className }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "arc-3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <BgImage
      className={className}
      fluid={data.placeholderImage.childImageSharp.fluid}
    />
  )
}

export default IntroBgImage
