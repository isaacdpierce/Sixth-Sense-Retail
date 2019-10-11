/** @jsx jsx */
import React from "react"
import { jsx, Styled } from "theme-ui"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import useSiteMetadata from "../hooks/useSiteMetaData"

const StyledLogo = styled.div`
  grid-column: 2 / span 4;
  grid-row: 2 / span 2;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  z-index: 1;
`

const Logo = () => {
  const { title } = useSiteMetadata()

  return (
    <StyledLogo
      sx={{
        px: 6,
        py: 4,
      }}
    >
      <h1
        sx={{
          fontSize: 7,
        }}
      >
        <Styled.a
          as={Link}
          to="/"
          sx={{
            color: `text`,
            fontFamily: `heading`,
          }}
        >
          {title}
        </Styled.a>
      </h1>
    </StyledLogo>
  )
}

export default Logo

Logo.propTypes = {
  siteTitle: PropTypes.string,
}

Logo.defaultProps = {
  siteTitle: ``,
}
