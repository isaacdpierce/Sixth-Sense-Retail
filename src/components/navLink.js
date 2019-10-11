/** @jsx jsx */
import React from "react"
import { jsx, Styled } from "theme-ui"
import styled from "@emotion/styled"
import { Link } from "gatsby"

const ListItem = styled.li`
  text-transform: uppercase;
  letter-spacing: 1px;
`

const navLink = props => {
  return (
    <ListItem
      sx={{
        fontFamily: "heading",
        fontSize: 3,
        p: 0,
        mr: 6,
      }}
    >
      <Styled.a as={Link} to={props.to}>
        {props.children}
      </Styled.a>
    </ListItem>
  )
}

export default navLink
