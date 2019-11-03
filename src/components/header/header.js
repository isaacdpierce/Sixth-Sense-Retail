/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import Title from "../title/title"
import BgImage from "./headerBgImage"
import HeaderImage from "./headerImage"
import Logo from "../logo/logo"
import Frame from "../frame/frame"
import useSiteMetaData from "../../hooks/useSiteMetaData"
import Line from "../lines/line"
import { Link } from "gatsby"

const Header = styled.header`
  grid-column: 1 / -1;
  grid-row: 1 / span 2;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(6, 1fr);
  position: relative;
  width: 100vw;
`

const Figure = styled.figure`
  grid-column: 1/ -1;
  grid-row: 1/ -1;
  opacity: 0.1;
  z-index: -1;
`
const StyledLogo = styled(Logo)`
  grid-column: 3 / span 6;
  grid-row: 2 / span 1;
`

const StyledHeaderImage = styled.div`
  grid-column: 8 / span 4;
  grid-row: 3 / span 3;
`
const StyledTitle = styled.div`
  grid-column: 2 / span 6;
  grid-row: 3 / span 2;
  text-transform: uppercase;
  letter-spacing: 1.45px;
  text-shadow: 0px 1px 2px black;
`

export default () => {
  const { description } = useSiteMetaData()
  return (
    <Header>
      <Line
        css={css`
          height: 112vw;
          width: 10px;
          background: linear-gradient(aqua, transparent);
          position: absolute;
          top: -400px;
          left: 100vw;
          transform: rotate(70deg);
          z-index: -1;
        `}
      />
      <Line
        css={css`
          height: 1000px;
          width: 50px;
          background: linear-gradient(aqua, transparent);
          position: absolute;
          top: -100px;
          left: 200px;
          transform: rotate(-30deg);
          z-index: -1;
        `}
      />
      <Line
        css={css`
          height: 100vw;
          width: 100px;
          background: linear-gradient(aqua, transparent);
          position: absolute;
          top: 100px;
          left: 100vw;
          transform: rotate(70deg);
          z-index: -1;
        `}
      />
      <StyledLogo />
      <StyledTitle>
        <Title fontSize="5" fontWeight="body" text={description} />
      </StyledTitle>
      <StyledHeaderImage>
        <Frame>
          <Link to="/inspire">
            <div
              css={css`
                transition: transform 3s ease-in-out;
                &:hover {
                  transform: scale(1.5);
                }
              `}
            >
              <HeaderImage />
            </div>
          </Link>
        </Frame>
      </StyledHeaderImage>
      <Figure>
        <BgImage />
      </Figure>
    </Header>
  )
}
