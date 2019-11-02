import React from "react"
import Frame from "../frame/frame"
import IntroImage from "./introImage"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { Link } from "gatsby"

const StyledImage = styled.div`
  transform: translate(200px);
`

export default () => {
  return (
    <StyledImage>
      <Frame>
        <Link to="/difference">
          <div
            css={css`
              transition: transform 5s ease-in-out;
              &:hover {
                transform: scale(3) translateY(-15%);
              }
            `}
          >
            <IntroImage />
          </div>
        </Link>
      </Frame>
    </StyledImage>
  )
}
