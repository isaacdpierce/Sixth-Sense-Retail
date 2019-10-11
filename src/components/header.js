/** @jsx jsx */
import React from "react"
import { jsx, Styled } from "theme-ui"
import styled from "@emotion/styled"

import Image from "./headerBgImage"
import Logo from "./logo"

import NavLinkList from "./navLinkList"

const Header = styled.header`
  grid-column: 1 / -1;
  grid-row: 1;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(6, 1fr);
`

const HeaderBgImage = styled.figure`
  grid-column: 1/ -1;
  grid-row: 1/ -1;
  opacity: 0.1;
  clip-path: polygon(0 0, 0 76%, 49% 100%, 100% 77%, 100% 0%);
`

export default () => {
  return (
    <Header>
      <Logo />
      <NavLinkList />
      <HeaderBgImage>
        <Image />
      </HeaderBgImage>
    </Header>
  )
}
