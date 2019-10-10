import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Styled } from "theme-ui"

const LandingIntro = () => {
  const data = useStaticQuery(graphql`
    query SiteDescQuery {
      site {
        siteMetadata {
          description
        }
      }
    }
  `)
  const { description } = data.site.siteMetadata
  return (
    <div>
      <Styled.h2>{description}</Styled.h2>
    </div>
  )
}

export default LandingIntro
