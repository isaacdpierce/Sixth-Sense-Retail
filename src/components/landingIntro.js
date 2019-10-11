import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Styled } from "theme-ui"
import useSiteMetadata from "../hooks/useSiteMetaData"

const LandingIntro = () => {
  const { description } = useSiteMetadata()
  return (
    <div>
      <Styled.h2>{description}</Styled.h2>
    </div>
  )
}

export default LandingIntro
