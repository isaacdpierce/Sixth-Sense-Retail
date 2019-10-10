/** @jsx jsx */
import React from "react"
import { jsx, Styled } from "theme-ui"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Image from "./headerBgImage"

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
`

const Logo = styled.div`
  border: 1px solid peru;
  grid-column: 2 / span 4;
  grid-row: 2 / span 2;
  display: flex;
  align-items: center;
  z-index: 1;
`

export default ({ siteTitle }) => {
  return (
    <Header>
      <Logo
        sx={{
          px: 6,
          py: 4,
        }}
      >
        <h1
          sx={{
            fontSize: 7,
          }}
        >
          <Styled.a
            as={Link}
            to="/"
            sx={{
              color: `text`,
            }}
          >
            {siteTitle}
          </Styled.a>
        </h1>
      </Logo>
      <NavLinkList />
      <HeaderBgImage>
        <Image />
      </HeaderBgImage>
    </Header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
