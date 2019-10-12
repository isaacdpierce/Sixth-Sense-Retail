import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Styled } from "theme-ui"
import styled from "@emotion/styled"
import useSiteMetadata from "../../hooks/useSiteMetaData"
import Image from "./introImage"

const StyledIntro = styled.section`
  grid-column: 3 / 13;
  grid-row: 3 / span 1;
  border: 2px solid #0b0b0b;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Figure = styled.figure`
  width: 600px;
  max-width: 90vw;
  margin-bottom: 1.45rem;
  z-index: -1;
  border: 40px inset #111;
`

const LandingIntro = () => {
  const { description } = useSiteMetadata()
  return (
    <StyledIntro>
      <Styled.h2>{description}</Styled.h2>
      <Figure>
        <Image />
      </Figure>
    </StyledIntro>
  )
}

export default LandingIntro
