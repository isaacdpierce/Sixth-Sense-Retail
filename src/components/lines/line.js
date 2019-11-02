import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

const Line = styled.div`
  background: linear-gradient(aqua, transparent);
`

export default props => {
  return (
    <Line
      css={css`
        height: 500px;
        width: 10px;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        transform: rotate(-10deg);
        z-index: -1;
      `}
      {...props}
    ></Line>
  )
}
