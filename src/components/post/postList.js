/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import useBlogData from "../../hooks/useBlogData"

const StyledList = styled.ul`
  list-style: none;
`

const PostList = () => {
  const { edges: posts } = useBlogData()
  return (
    <div>
      <h2>Engage. Unconform.</h2>
      <StyledList>
        {posts.map(({ node: post }) => (
          <li key={post.id}>
            <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
            <p>{post.excerpt}</p>
          </li>
        ))}
      </StyledList>
    </div>
  )
}

export default PostList
