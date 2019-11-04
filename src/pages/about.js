/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Main from "../components/main/main"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Figure = styled.figure`
  grid-column: 1/ -1;
  grid-row: 1/ -1;
  opacity: 0.5;
  z-index: -1;
`

const About = () => {
  return (
    <Layout>
      <SEO title="About" />
      <Main>
        <h1 sx={{ fontSize: 7 }}>
          Reignite the flames of culture and connection.
        </h1>

        <p>
          Partner network social proof churn rate pitch crowdfunding bandwidth
          seed money pivot network effects. Marketing innovator freemium
          hypotheses social proof validation growth hacking incubator channels
          business-to-business gamification user experience scrum project.
          Leverage crowdfunding technology responsive web design MVP success
        </p>
        <p>
          Network effects monetization release business model canvas ecosystem
          innovator handshake user experience facebook deployment. Agile
          development first mover advantage non-disclosure agreement traction
          prototype product management leverage freemium. Non-disclosure
          agreement ecosystem stealth. A/B testing product management ownership
          startup gen-z venture innovator analytics. Market disruptive
          responsive web design beta graphical user interface termsheet
          bandwidth sales analytics long tail niche market prototype assets.
          Stock hypotheses hackathon deployment first mover advantage bandwidth
          analytics. Mass market social media first mover advantage termsheet
          incubator creative deployment validation iPad funding bootstrapping
          traction prototype
        </p>
        <p>
          Vesting period channels angel investor buzz strategy founders supply
          chain crowdfunding pivot influencer facebook responsive web design
          marketing. Founders marketing gen-z client funding growth hacking
          hypotheses early adopters rockstar holy grail responsive web design.
          Disruptive buzz incubator backing success direct mailing return on
          investment branding conversion business-to-consumer founders.
          Disruptive technology direct mailing graphical user interface paradigm
          shift buzz niche market lean startup pitch pivot.
        </p>
      </Main>
      <Figure>
        <BgImage />
      </Figure>
    </Layout>
  )
}

const BgImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "structure.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default About
