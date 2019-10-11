/** @jsx jsx */
import React from "react"
import { jsx, Styled } from "theme-ui"
import styled from "@emotion/styled"
import NavLinkItem from "./navLinkItem"
import useNavLinkData from "../hooks/useNavLinkData"

const NavList = styled.nav`
  grid-column: 6 / span 5;
  grid-row: 1;
  z-index: 1;

  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
  }
`
export default () => {
  const { edges } = useNavLinkData()

  return (
    <NavList>
      <ul
        sx={{
          pt: 4,
          m: 0,
        }}
      >
        {edges.map(({ node }) => {
          return (
            <NavLinkItem key={node.id} to={node.path}>
              {node.link}
            </NavLinkItem>
          )
        })}
      </ul>
    </NavList>
  )
}
