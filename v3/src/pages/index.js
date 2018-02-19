import React from 'react'
import Link from 'gatsby-link'
import WorkItemsGrid from '../components/work-items-grid.js'

const IndexPage = ({ data }) => (
  <WorkItemsGrid allWorkItemsJson={data.allWorkItemsJson} />
)

export default IndexPage

export const query = graphql`
  query IndexQuery {
    allWorkItemsJson {
      edges {
        node {
          slug,
          title,
          blurb,
          details {
            image
          }
        }
      }
    }
  }
`
