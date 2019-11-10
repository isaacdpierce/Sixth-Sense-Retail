import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

const Line = styled.div`
  background: linear-gradient(aqua, transparent);
  position: absolute;
  z-index: -1;
`

export default props => {
  return <Line {...props}></Line>
}
