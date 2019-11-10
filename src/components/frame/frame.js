import React from "react"
import styled from "@emotion/styled"

const OuterFrame = styled.div`
  border: 1px solid black;
  border-top: 1px solid #1e1e1e;
  border-radius: 3px;
  box-shadow: 0px 10px 10px 10px hsl(0, 0%, 0%, 0.6);
`

const InnerFrame = styled.div`
  z-index: -1;
  border: 40px solid #0c0c0c;
  border-radius: 3px;
`

const Inset = styled.div`
  border-top: 5px solid black;
  border-left: 5px solid #0e0e0e;
  border-right: 5px solid #0e0e0e;
  border-bottom: 5px solid #1e1e1e;
  overflow: hidden;
`

export default ({ children }) => {
  return (
    <OuterFrame>
      <InnerFrame>
        <Inset>{children}</Inset>
      </InnerFrame>
    </OuterFrame>
  )
}
