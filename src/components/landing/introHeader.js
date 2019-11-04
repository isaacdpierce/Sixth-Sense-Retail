/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import useSiteMetadata from "../../hooks/useSiteMetaData"
import styled from "@emotion/styled"
import Frame from "../frame/frame"
import IntroHeadImage from "./introHeadImage"
import { css } from "@emotion/core"
import { Link } from "gatsby"

const IntroHeader = styled.header`
  width: 140%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

const Headline = styled.h2`
  width: 350px;
  text-shadow: 0px 1px 2px black;
`

const ImageWrapper = styled.div`
  transition: all 3s ease-in-out;
  position: relative;
  &:hover {
    transform: scale(1.5) translate(15%, -5%);
    &:before {
      content: "Click to enter.";
      font-size: 1rem;
      color: black;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 2;
    }
  }
`

export default () => {
  const { headline } = useSiteMetadata()
  return (
    <IntroHeader>
      <div style={{ width: "600px" }}>
        <Frame>
          <Link to="/connect">
            <ImageWrapper>
              <IntroHeadImage />
            </ImageWrapper>
          </Link>
        </Frame>
      </div>
      <Headline sx={{ mb: 0, mt: 7, fontWeight: "body", fontSize: 6 }}>
        {headline}
      </Headline>
    </IntroHeader>
  )
}
