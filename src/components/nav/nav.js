/** @jsx jsx */
import React from "react"
import { jsx, Styled } from "theme-ui"
import styled from "@emotion/styled"
import NavLink from "./navLink"
import useNavLinkData from "../../hooks/useNavLinkData"

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 50%;

  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
  }
`
export default () => {
  const { edges } = useNavLinkData()

  return (
    <Nav>
      <ul
        sx={{
          pt: 4,
          m: 0,
        }}
      >
        {edges.map(({ node }) => {
          return (
            <NavLink key={node.id} to={node.path}>
              {node.link}
            </NavLink>
          )
        })}
      </ul>
    </Nav>
  )
}
