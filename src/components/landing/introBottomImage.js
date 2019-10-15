import React from "react"
import Frame from "../frame/frame"
import IntroImage from "./introImage"
import styled from "@emotion/styled"

const StyledImage = styled.div`
  transform: translate(200px);
`

export default () => {
  return (
    <StyledImage>
      <Frame>
        <IntroImage />
      </Frame>
    </StyledImage>
  )
}
