/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-transform: uppercase;
  border-radius: 3px;
  letter-spacing: -20px;
  text-shadow: 0px 2px 3px black;
`

const Logo = ({ className }) => {
  return (
    <StyledLogo className={className}>
      <Link to="/">
        <h1 sx={{ fontSize: 8, m: 0 }}>6SR</h1>
      </Link>
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
