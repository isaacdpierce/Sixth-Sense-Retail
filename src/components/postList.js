import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import useBlogData from "../hooks/useBlogData"

const PostList = () => {
  const { edges: posts } = useBlogData()
  return (
    <div>
      <h1>This is an MDX Blog</h1>
      <ul>
        {posts.map(({ node: post }) => (
          <li key={post.id} style={{ listStyle: "none" }}>
            <Link to={post.fields.slug}>
              <h2 style={{ color: "darkred" }}>{post.frontmatter.title}</h2>
            </Link>
            <p>{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PostList
