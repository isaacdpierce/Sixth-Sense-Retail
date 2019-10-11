/** @jsx jsx */
import React from "react"
import { jsx, Styled } from "theme-ui"
import "./layout.css"
import styled from "@emotion/styled"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"

// Create a grid to  place the items
const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(16, 1fr);
  grid-template-rows: repeat(3, 100vh) 10vh;
`

const Main = styled.main`
  border: 1px solid aqua;
  grid-column: 1 / -1;
  grid-row: 2 / -1;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Footer = styled.footer`
  border: 1px solid peru;
  grid-column: 1 / -1;
  grid-row: -1;
  display: flex;
  padding: 2rem;
  justify-content: center;
  align-items: flex-end;
`

const Layout = ({ children }) => {
  return (
    <>
      <Wrapper sx={{ backgroundColor: "background" }}>
        <Header />
        <Main>{children}</Main>
        <Footer>
          <p sx={{ color: "greyLight", mb: 0 }}>
            © {new Date().getFullYear()}, Built by &nbsp;{" "}
            <Styled.a href="https://www.isaacpierce.io"> Isaac Pierce</Styled.a>
          </p>
        </Footer>
      </Wrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
