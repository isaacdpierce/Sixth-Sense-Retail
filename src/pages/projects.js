import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Main from "../components/main/main"

export default () => {
  return (
    <Layout>
      <SEO title="Projects" />
      <Main>
        <h1>Recent exciting projects</h1>
      </Main>
    </Layout>
  )
}
