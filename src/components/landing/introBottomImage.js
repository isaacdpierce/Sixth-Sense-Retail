import React from "react"
import Frame from "../frame/frame"
import IntroImage from "./introImage"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { Link } from "gatsby"

const StyledImage = styled.div`
  transform: translate(200px);
`

const ImageWrapper = styled.div`
  transition: transform 5s ease-in-out;
  position: relative;
  &:hover {
    transform: scale(3) translateY(-15%);
    &:before {
      content: "Click to enter";
      text-transform: uppercase;
      font-size: 1rem;
      color: black;
      position: absolute;
      top: 70%;
      left: 50%;
      transform: translateX(-50%);
      z-index: 2;
    }
  }
`

export default () => {
  return (
    <StyledImage>
      <Frame>
        <Link to="/difference">
          <ImageWrapper>
            <IntroImage />
          </ImageWrapper>
        </Link>
      </Frame>
    </StyledImage>
  )
}
