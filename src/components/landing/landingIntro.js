/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import IntroBottomImage from "./introBottomImage"
import IntroHeader from "./introHeader"
import Line from "../lines/line"
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

const StyledIntroBgImage = styled(IntroBgImage)`
  grid-column: 1/ -1;
  grid-row: 3 / span 1;
  margin-top: 100px;
  border-top: 100px solid black;
`

const HeaderText = styled.div``

const LandingIntro = () => {
  return (
    <>
      <Line
        css={css`
          height: 100vw;
          width: 100px;
          top: 100px;
          left: 100vw;
          transform: rotate(70deg);
        `}
      />

      <StyledIntroBgImage className="intro-background-image" />

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
