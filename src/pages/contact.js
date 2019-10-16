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
        <h1>Contact Us!</h1>
      </Main>
    </Layout>
  )
}
