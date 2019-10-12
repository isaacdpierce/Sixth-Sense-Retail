/** @jsx jsx */
import React from "react"
import { jsx, Styled } from "theme-ui"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostList from "../components/post/postList"
import Main from "../components/main/main"

export default () => {
  return (
    <Layout>
      <SEO title="Blog" />
      <Main>
        <Styled.h1>Welcome to the blog</Styled.h1>
        <PostList />
      </Main>
    </Layout>
  )
}
