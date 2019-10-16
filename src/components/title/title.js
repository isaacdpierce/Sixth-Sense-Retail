/** @jsx jsx */
import React from "react"
import { jsx, Styled } from "theme-ui"

export default ({
  fontSize = 4,
  fontFamily = "heading",
  fontWeight = "heading",
  text,
}) => {
  return (
    <h2
      sx={{
        pt: 5,
        fontSize: `${fontSize}`,
        fontFamily: `${fontFamily}`,
        fontWeight: `${fontWeight}`,
        textTransform: `uppercase`,
      }}
    >
      {text}
    </h2>
  )
}
