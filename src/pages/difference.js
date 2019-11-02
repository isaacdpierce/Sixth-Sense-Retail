/** @jsx jsx */
import React from "react"
import { jsx, Styled } from "theme-ui"
import { css, keyframes } from "@emotion/core"
import styled from "@emotion/styled"
import MainImage from "../components/landing/introImage"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Main from "../components/main/main"
import { Link } from "gatsby"

const StyledHeaderImage = styled.div`
  width: 100vw;
  grid-column: 1 / -1;
  grid-row: 1;
`

const fullscreen = keyframes`
    from {
    margin-left: 40vw;
    margin-top: 25vh;
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
          <MainImage />
        </div>
      </StyledHeaderImage>
      <Main>
        <h1>Refresh your thinking.</h1>
        <p>
          Remarkable destination Shinkansen hub deserunt soft power. Sint iconic
          impeccable quality of life cosy. Classic Melbourne et hub. Nulla
          craftsmanship Marylebone Sunspel St Moritz. Bulletin destination
          boutique charming, culpa first-class voluptate dolore exclusive
          Scandinavian elit Singapore. Concierge adipisicing quality of life,
          conversation aute eclectic the best the highest quality Beams
          signature liveable Marylebone joy Ginza. Destination proident liveable
          minim boulevard ryokan. Laborum bulletin flat white, K-pop ad irure
          sophisticated delightful hand-crafted exercitation dolor eu. Boutique
          excepteur elegant aute enim, aliqua punctual sed eiusmod Helsinki eu
          wardrobe Asia-Pacific. Winkreative Lufthansa consectetur minim magna
          quis dolore. Melbourne Shinkansen flat white, aliqua Fast Lane
          uniforms in. Ginza ex espresso pariatur efficient Sunspel Baggu minim
          ryokan eclectic flat white remarkable sed adipisicing liveable. Minim
          voluptate exquisite lovely proident. Singapore soft power officia,
          anim bulletin sophisticated minim Tsutaya in nostrud. Cillum ut Baggu
          quality of life quis, Winkreative finest minim discerning Lufthansa
          uniforms fugiat aute Singapore. Signature ut sunt duis. Liveable
          essential dolore discerning, sleepy delightful in. Baggu wardrobe
          aliquip izakaya perfect signature airport Singapore. Concierge
          carefully curated consequat laborum. Craftsmanship culpa nisi dolor,
          Fast Lane eiusmod do cutting-edge. Smart lovely wardrobe efficient.
          Minim boutique cosy, liveable est delightful first-class.
        </p>
      </Main>
    </Layout>
  )
}

export default Inspire
