/** @jsx jsx */
import React from "react"
import { jsx, Styled } from "theme-ui"
import { css, keyframes } from "@emotion/core"
import styled from "@emotion/styled"
import IntroHeadImage from "../components/landing/introHeadImage"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Main from "../components/main/main"

const StyledHeaderImage = styled.div`
  width: 100vw;
  grid-column: 1 / -1;
  grid-row: 1;
`

const fullscreen = keyframes`
    from {
    margin-left: 23vw;
    margin-top: 23vh;
    width: 40vw; 
  }

  to {
    margin-left: 0;
    margin-top: 0;
    width: 100vw;
  }
`

const Inspire = () => {
  return (
    <Layout>
      <SEO title="Inspire" />
      <StyledHeaderImage>
        <div
          css={css`
            animation: ${fullscreen} 3s ease;
          `}
        >
          <IntroHeadImage />
        </div>
      </StyledHeaderImage>
      <Main>
        <h1>We help you connect with your community</h1>
        <p>
          Marketing research & development innovator long tail paradigm shift
          leverage MVP launch party. Ownership twitter bootstrapping virality
          social proof gen-z freemium churn rate long tail first mover advantage
          backing. Investor business model canvas equity early adopters stealth
          business plan leverage. Long tail branding virality. Graphical user
          interface hackathon crowdfunding success. Validation client startup
          crowdsource. Ramen long tail influencer learning curve conversion
          venture niche market launch party low hanging fruit focus incubator.
          Bandwidth niche market seed round pitch non-disclosure agreement
          infographic mass market conversion focus stock. Handshake low hanging
          fruit lean startup buyer business plan beta A/B testing. Partnership
          focus business plan scrum project growth hacking handshake low hanging
          fruit rockstar channels success validation product management. Product
          management first mover advantage beta alpha growth hacking equity.
          Facebook A/B testing launch party focus investor branding burn rate
          agile development angel investor funding return on investment
          termsheet value proposition. Product management strategy user
          experience early adopters lean startup iteration pivot accelerator
          first mover advantage alpha bootstrapping agile development. User
          experience freemium MVP twitter crowdsource burn rate. Release series
          A financing pivot product management ramen advisor agile development
          value proposition assets iteration interaction design. Value
          proposition investor responsive web design innovator. Agile
          development technology direct mailing advisor freemium first mover
          advantage. Long tail metrics business model canvas iteration startup
          termsheet business-to-consumer twitter. Sales advisor agile
          development.
        </p>
      </Main>
    </Layout>
  )
}

export default Inspire
