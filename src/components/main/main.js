/** @jsx jsx */
import React from "react"
import { jsx, Styled } from "theme-ui"
import Layout from "../layout"
import styled from "@emotion/styled"

const Main = styled.main`
  border: 1px solid black;
  border-radius: 3px;
  background-color: hsl(0, 0%, 0%);
  grid-column: 3 / 13;
  grid-row: 2 / -1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default ({ children }) => <Main sx={{ p: 7, mb: 7 }}>{children}</Main>
