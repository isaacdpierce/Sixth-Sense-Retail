/** @jsx jsx */
import React, { useState, useEffect } from "react"
import { jsx } from "theme-ui"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { Link } from "gatsby"

const SmallLogo = styled.div`
  width: 300px;
  letter-spacing: 1.5px;
`

export default () => {
  return (
    <Link to="/">
      <SmallLogo>
        <span
          sx={{ fontFamily: "body" }}
          css={css`
            color: #e3e3e3;
          `}
        >
          6th
        </span>
        <span
          sx={{ fontFamily: "heading" }}
          css={css`
            color: white;
            font-weight: 100;
          `}
        >
          Sense
        </span>
        <span
          sx={{ fontFamily: "body" }}
          css={css`
            color: #e3e3e3;
          `}
        >
          Retail
        </span>
      </SmallLogo>
    </Link>
  )
}
