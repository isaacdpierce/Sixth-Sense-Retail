import { useStaticQuery, graphql } from "gatsby"
export default () => {
  const { allMdx } = useStaticQuery(graphql`
    query BlogListQuery {
      allMdx {
        edges {
          node {
            excerpt(pruneLength: 30)
            id
            frontmatter {
              date(formatString: "MMMM DD YYYY")
              title
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  return allMdx
}
