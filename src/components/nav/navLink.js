/** @jsx jsx */
import React from "react"
import { jsx, Styled } from "theme-ui"
import styled from "@emotion/styled"
import { Link } from "gatsby"

const ListItem = styled.li`
  text-transform: uppercase;
  letter-spacing: 1px;
`

const StyledLink = styled(Link)``

const navLink = props => {
  return (
    <ListItem
      sx={{
        fontSize: 3,
        p: 0,
        mr: 6,
      }}
    >
      <Link to={props.to} sx={{ fontFamily: "heading" }}>
        {props.children}
      </Link>
    </ListItem>
  )
}

export default navLink
