/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import Title from "../title/title"
import HeaderBgImage from "./headerBgImage"
import HeaderImage from "./headerImage"
import Logo from "../logo/abbrvLogo"
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
  width: 100vw;
  position: relative;
`

const StyledBgImage = styled(HeaderBgImage)`
  grid-column: 1/ -1;
  grid-row: 1 / -1;
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

const ImageWrapper = styled.div`
  transition: all 3s ease-in-out;
  position: relative;
  &:hover {
    transform: scale(1.5);
    &:before {
      content: "Click to enter.";
      font-size: 1rem;
      color: white;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 2;
    }
  }
`

export default () => {
  const { description } = useSiteMetaData()

  return (
    <>
      <Header>
        <Line
          css={css`
            height: 1000px;
            width: 100px;
            top: -100px;
            left: 250px;
            transform: rotate(-30deg);
          `}
        />
        <Line
          css={css`
            height: 92vw;
            width: 10px;
            top: -300px;
            left: 100vw;
            transform: rotate(70deg);
          `}
        />
        <StyledLogo />
        <StyledTitle>
          <Title fontSize="5" fontWeight="body" text={description} />
        </StyledTitle>
        <StyledHeaderImage>
          <Frame>
            <Link to="/inspire">
              <ImageWrapper>
                <HeaderImage />
              </ImageWrapper>
            </Link>
          </Frame>
        </StyledHeaderImage>
      </Header>
      <StyledBgImage className="header-background-image" />
    </>
  )
}
