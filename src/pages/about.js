/** @jsx jsx */
import React from "react"
import { jsx, Styled } from "theme-ui"
import { Link } from "gatsby"
import PageTransition from "gatsby-plugin-page-transitions"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Main from "../components/main/main"

const About = () => {
  return (
    <Layout>
      <SEO title="About" />
      <Main>
        <Styled.h1>Hi from the about page</Styled.h1>
      </Main>
    </Layout>
  )
}

export default About
