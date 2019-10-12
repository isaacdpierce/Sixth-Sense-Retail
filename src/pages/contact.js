/** @jsx jsx */
import React from "react"
import { jsx, Styled } from "theme-ui"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Main from "../components/main/main"

export default () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <Main>
        <Styled.h1>Contact Us!</Styled.h1>
      </Main>
    </Layout>
  )
}
