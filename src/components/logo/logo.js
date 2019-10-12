/** @jsx jsx */
import React from "react"
import { jsx, Styled } from "theme-ui"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import useSiteMetadata from "../../hooks/useSiteMetaData"

const StyledLogo = styled.div`
  border: 1px solid aqua;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-transform: uppercase;
`

const Logo = ({ className }) => {
  const { title } = useSiteMetadata()

  return (
    <StyledLogo className={className}>
      <Link to="/">
        <h1 sx={{ fontSize: 7, m: 0 }}>{title}</h1>
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
