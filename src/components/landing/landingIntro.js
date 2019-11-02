/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import styled from "@emotion/styled"
import IntroBottomImage from "./introBottomImage"
import IntroHeader from "./introHeader"
import IntroBgImage from "./introBgImage"
import IntroText from "./introText"
import Unconform from "./unconform"

const StyledIntro = styled.section`
  grid-column: 3 / 13;
  grid-row: 3 / span 1;
  border: 2px solid #0b0b0b;
  display: flex;
  flex-direction: column;
  background-color: hsl(0, 0%, 0%, 0.5);
  position: relative;
`

const Figure = styled.figure`
  padding-top: 300px;
  grid-column: 1/ -1;
  grid-row: 3/ -1;
  opacity: 0.1;
  z-index: -1;
`

const HeaderText = styled.div``

const LandingIntro = () => {
  return (
    <>
      <Figure>
        <IntroBgImage />
      </Figure>
      <StyledIntro sx={{ p: 7 }}>
        <IntroHeader />
        <IntroText />
        <Unconform />
        <IntroBottomImage />
      </StyledIntro>
    </>
  )
}

export default LandingIntro
