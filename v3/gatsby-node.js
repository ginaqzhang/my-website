const MarkdownIt = require('markdown-it')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

let md = new MarkdownIt()

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allWorkItemsJson {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      result.data.allWorkItemsJson.edges.forEach(({ node }) => {
        createPage({
          path: `/work/${node.slug}`,
          component: path.resolve('./src/templates/work-item-page.js'),
          context: {
            slug: node.slug,
          },
        })
      })
      resolve()
    })

    createPage({
      path: `/work`,
      component: path.resolve('./src/pages/index.js')
    })
  })
}

exports.onCreateNode = ({ node }) => {
  if (node.internal.type === 'WorkItemsJson') {
    node.title = md.render(node.title)
    node.blurb = md.render(node.blurb)
    for (let entry of node.details) {
      if (entry.caption) {
        entry.caption = md.render(entry.caption)
      }

      // Since the JSON transformer can't handle complex schemas
      if (entry.imageSet) {
        entry.imageSet = JSON.stringify(entry.imageSet)
      }
    }

    if (node.footer) {
      node.footer = md.render(node.footer)
    }
  }
}
