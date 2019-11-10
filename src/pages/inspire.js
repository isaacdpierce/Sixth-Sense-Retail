/** @jsx jsx */
import React from "react"
import { jsx, Styled } from "theme-ui"
import { css, keyframes } from "@emotion/core"
import styled from "@emotion/styled"
import HeaderImage from "../components/header/headerImage"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Main from "../components/main/main"

const fullscreen = keyframes`
    from {
    margin-left: 59vw;
    margin-top: 40vh;
    width: 35vw; 
  }

  to {
    margin-left: 0;
    margin-top: 0;
    width: 100vw;
  }
`

const StyledHeaderImage = styled.div`
  width: 100vw;
  grid-column: 1 / -1;
  grid-row: 1;
  animation: ${fullscreen} 3s ease;
`

export default () => {
  return (
    <Layout>
      <SEO title="Inspire" />
      <StyledHeaderImage>
        <HeaderImage />
      </StyledHeaderImage>
      <Main>
        <h1>Give people more than what they expect.</h1>
        <p>
          Entrepreneur storytelling, academic, our work co-create support NGO.
          White paper collaborative consumption social intrapreneurship benefit
          corporation. Dynamic preliminary thinking, disrupt storytelling,
          impact milestones. Leverage collaborative cities a innovation inspire.
          Commitment improve the world cultivate grit, social return on
          investment incubator co-create inspiring gender rights. Energize;
          social entrepreneurship benefit corporation challenges and
          opportunities parse ideate NGO. Or scale and impact triple bottom line
          equal opportunity move the needle social innovation equal opportunity
          scale and impact. Benefit corporation; when and; equal opportunity
          strengthening infrastructure humanitarian. Corporate social
          responsibility, capacity building, effective leverage indicators
          relief systems thinking. Venture philanthropy citizen-centered
          revolutionary scalable impact investing mobilize. Justice
          accessibility; shared unit of analysis social entrepreneur granular.
          Inclusive inspirational; social impact policymaker a silo, social
          intrapreneurship but game-changer. Circular global; uplift; design
          thinking agile deep dive. LGBTQ+ policymaker expose the truth,
          external partners, impact technology milestones efficient
          contextualize. External partners bandwidth co-create.
        </p>
      </Main>
    </Layout>
  )
}
