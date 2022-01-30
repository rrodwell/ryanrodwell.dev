const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const pageTemplate = path.resolve(`src/templates/page.jsx`)

  return graphql(`
    {
      site {
        siteMetadata {
          author
          description
          title
        }
      }
      allPagesYaml {
        edges {
          node {
            title
            slug
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      throw result.errors
    }

    result.data.allPagesYaml.edges.forEach(({ node }) => {
      const { slug, title } = node
      createPage({
        path: `${slug}`,
        component: pageTemplate,
        context: { slug, title, site: result.data.site },
      })
    })
  })
}
