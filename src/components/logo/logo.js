/** @jsx jsx */
import React from "react"
import { jsx, Styled } from "theme-ui"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import useSiteMetadata from "../../hooks/useSiteMetaData"

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-transform: uppercase;
  /* border: 2px solid black; */
  border-radius: 3px;
  /* background-color: hsl(0, 0%, 0%, 0.7); */
`

const Logo = ({ className }) => {
  const { title } = useSiteMetadata()
  const titleArray = title.split(" ")

  return (
    <StyledLogo className={className}>
      <Link to="/">
        <h1 sx={{ fontSize: 6, m: 0 }}>
          {titleArray[0]}
          <sub>{titleArray.slice(1).join(" ")}</sub>
        </h1>
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
