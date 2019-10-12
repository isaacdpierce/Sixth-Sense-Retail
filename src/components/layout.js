/** @jsx jsx */
import React from "react"
import { jsx, Styled } from "theme-ui"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import PropTypes from "prop-types"

import Nav from "./nav/nav"

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  opacity: 0.95;
`

// Create a grid to  place the items
const MainGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(16, 1fr);
  grid-template-rows: 10vh 100vh 1fr 10vh;
`

const Footer = styled.footer`
  display: flex;
  padding: 2rem;
  justify-content: center;
  align-items: flex-end;
`

const Layout = ({ children }) => {
  return (
    <Wrapper sx={{ backgroundColor: "background" }}>
      <Nav />
      <MainGrid>{children}</MainGrid>
      <Footer>
        <p sx={{ color: "greyLight", mb: 0 }}>
          © {new Date().getFullYear()}, Built by &nbsp;{" "}
          <Link
            href="https://www.isaacpierce.io"
            sx={{ fontFamily: "heading" }}
          >
            {" "}
            Isaac Pierce
          </Link>
        </p>
      </Footer>
    </Wrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
