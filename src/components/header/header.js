/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import styled from "@emotion/styled"
import Title from "../title/title"
import BgImage from "./headerBgImage"
import HeaderImage from "./headerImage"
import Logo from "../logo/logo"
import Frame from "../frame/frame"
import useSiteMetaData from "../../hooks/useSiteMetaData"

const Header = styled.header`
  grid-column: 1 / -1;
  grid-row: 1 / span 2;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(6, 1fr);
`

const Figure = styled.figure`
  grid-column: 1/ -1;
  grid-row: 1/ -1;
  opacity: 0.1;
  z-index: -1;
  /* clip-path: polygon(0 0, 0 76%, 33% 100%, 100% 77%, 100% 0%); */
`
const StyledLogo = styled(Logo)`
  grid-column: 4 / span 3;
  grid-row: 2;
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
`

export default () => {
  const { description } = useSiteMetaData()
  return (
    <Header>
      <StyledLogo />
      <StyledTitle>
        <Title
          fontSize="6"
          fontFamily="body"
          fontWeight="body"
          text={description}
        />
      </StyledTitle>
      <StyledHeaderImage>
        <Frame>
          <HeaderImage />
        </Frame>
      </StyledHeaderImage>
      <Figure>
        <BgImage />
      </Figure>
    </Header>
  )
}
