/** @jsx jsx */
import React, { useState, useEffect } from "react"
import { jsx } from "theme-ui"
import { css } from "@emotion/core"

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
  width: 200px;
`

const darkBg = css`
  background-color: hsl(0, 0%, 0%, 0.9);
`
const transBg = css`
  background-color: hsl(0, 0%, 0%, 0);
`

export default () => {
  const [bgColor, setBgColor] = useState()
  const [logo, setLogo] = useState(false)
  const { edges } = useNavLinkData()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 50) {
        setBgColor(transBg)
        setLogo(false)
      } else {
        setBgColor(darkBg)
        setLogo(true)
      }
    }
    window.addEventListener("scroll", handleScroll)
  }, [])

  return (
    <Nav css={bgColor}>
      <SmallLogo>
        {logo && (
          <h2 sx={{ m: 0, p: 0 }}>
            We<sub>The Agency</sub>
          </h2>
        )}
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
