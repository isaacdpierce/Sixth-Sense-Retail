/** @jsx jsx */
import React from "react"
import { jsx, Styled } from "theme-ui"
import { keyframes } from "@emotion/core"
import Layout from "../layout"
import styled from "@emotion/styled"

const delay = keyframes`
0% {
  opacity: 0;
}
20% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`

const Main = styled.main`
  border: 1px solid black;
  border-radius: 3px;
  background-color: hsl(0, 0%, 0%, 70%);
  grid-column: 3 / 13;
  grid-row: 2 / -1;
  margin-top: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${delay} 3s ease;
  z-index: 2;
`

export default ({ children }) => (
  <Main sx={{ px: 8, py: 6, mb: 7 }}>{children}</Main>
)
