import { useStaticQuery, graphql } from "gatsby"
export default () => {
  const { allMainNavLinksJson } = useStaticQuery(graphql`
    query mainNavLinksQuery {
      allMainNavLinksJson {
        edges {
          node {
            id
            link
            path
          }
        }
      }
    }
  `)
  return allMainNavLinksJson
}
