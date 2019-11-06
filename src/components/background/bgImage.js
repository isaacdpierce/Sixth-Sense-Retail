import React from "react"
import Img from "gatsby-image"
import { css } from "@emotion/core"

const HeaderBgImage = ({ className, fluid, opacity = 0.1, zIndex = -1 }) => {
  return (
    <Img
      className={className}
      alt=""
      fluid={fluid}
      css={css`
        opacity: ${opacity};
        z-index: ${zIndex};
      `}
    />
  )
}

export default HeaderBgImage
