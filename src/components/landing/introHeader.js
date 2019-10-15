/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import useSiteMetadata from "../../hooks/useSiteMetaData"
import styled from "@emotion/styled"
import Frame from "../frame/frame"
import IntroHeadImage from "./introHeadImage"

const IntroHeader = styled.header`
  width: 140%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

const Headline = styled.h2`
  width: 350px;
`

export default () => {
  const { headline } = useSiteMetadata()
  return (
    <IntroHeader>
      <div style={{ width: "600px" }}>
        <Frame>
          <IntroHeadImage />
        </Frame>
      </div>
      <Headline sx={{ mb: 0, mt: 7, fontWeight: "body", fontSize: 6 }}>
        {headline}
      </Headline>
    </IntroHeader>
  )
}
