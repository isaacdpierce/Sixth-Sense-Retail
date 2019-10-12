/** @jsx jsx */
import React from "react"
import { jsx, Styled } from "theme-ui"
import styled from "@emotion/styled"

import Image from "./headerBgImage"
import Logo from "../logo/logo"

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
  grid-row: 2 / span 2;
`

export default () => {
  return (
    <Header>
      <StyledLogo className="header__logo" />
      <Figure>
        <Image />
      </Figure>
    </Header>
  )
}
