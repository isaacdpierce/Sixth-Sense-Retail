/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import Img from "gatsby-image"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"

const MiniBio = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "avatar.png" }) {
        childImageSharp {
          fixed(width: 70, height: 70) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const StyledBio = styled.section`
    display: flex;
  `

  const Text = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  `

  return (
    <StyledBio>
      <Img
        style={{
          marginRight: "1rem",
          borderRadius: "10%",
          boxShadow: "0 0 3px 3px grey",
        }}
        fixed={data.file.childImageSharp.fixed}
        alt="Picture of me!"
      />
      <Text>
        <h2 sx={{ p: 0, m: 0 }}>My MiniBio</h2>
        <p sx={{ p: 0, m: 0 }}>
          I create valuable connections between makers and buyers.
        </p>
      </Text>
    </StyledBio>
  )
}

export default MiniBio
