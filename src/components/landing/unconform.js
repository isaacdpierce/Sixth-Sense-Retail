import React from "react"
import styled from "@emotion/styled"

const Text = styled.h2`
  color: hsl(0, 0%, 100%, 0.1);
  transform: rotate(90deg);
  position: absolute;
  bottom: 180px;
  left: -100px;
  letter-spacing: 2px;
  z-index: 100;
  font-size: 80px;
  margin: 0;
  text-transform: uppercase;
`

export default () => {
  return <Text>Unconform</Text>
}
