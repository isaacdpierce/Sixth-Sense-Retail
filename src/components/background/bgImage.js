import React from "react"
import Img from "gatsby-image"
import { css } from "@emotion/core"

export default ({ className, fluid, opacity = 0.1, zIndex = -1 }) => {
  return (
    <Img
      className={`${className}-background-image`}
      alt=""
      role="presentation"
      fluid={fluid}
      css={css`
        opacity: ${opacity};
        z-index: ${zIndex};
      `}
    />
  )
}
