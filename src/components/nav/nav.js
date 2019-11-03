/** @jsx jsx */
import React, { useState, useEffect } from "react"
import { jsx } from "theme-ui"
import { css, keyframes } from "@emotion/core"
import useSiteMetaData from "../../hooks/useSiteMetaData"
import styled from "@emotion/styled"
import NavLink from "./navLink"
import useNavLinkData from "../../hooks/useNavLinkData"

const Nav = styled.nav`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-around;
  width: 100vw;
  z-index: 99;
  transition: background-color 1s ease;
  align-items: center;
  text-transform: uppercase;
  font-weight: bold;

  ul {
    list-style: none;
    display: flex;
    text-shadow: 0 0 1px black;
  }
`

const SmallLogo = styled.div`
  width: 300px;
`

const darkBg = css`
  background-color: hsl(0, 0%, 0%, 90%);
`
const transBg = css`
  background-color: hsl(0, 0%, 0%, 30%);
`
const show = keyframes`
  from {
    color: transparent;
  }

  to {
    color: white; 
  }
`
export default () => {
  const [bgColor, setBgColor] = useState(transBg)
  const { edges } = useNavLinkData()
  const { title } = useSiteMetaData()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 50) {
        setBgColor(transBg)
      } else {
        setBgColor(darkBg)
      }
    }
    window.addEventListener("scroll", handleScroll)
  }, [])

  return (
    <Nav css={bgColor}>
      <SmallLogo>
        <h2 sx={{ m: 0, p: 0 }}>{title}</h2>
      </SmallLogo>
      <div>
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
      </div>
    </Nav>
  )
}
