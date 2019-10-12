import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import LandingIntro from "../components/landing/landingIntro"
import Header from "../components/header/header"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <LandingIntro />
  </Layout>
)

export default IndexPage
