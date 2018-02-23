import React from 'react'
import Separator from '../components/separator.js'
import WorkItem from '../components/work-item.js'
import WorkItemsGrid from '../components/work-items-grid.js'

const WorkItemPageTemplate = ({ data }) => (
  <div>
    <WorkItem itemData={data.workItemsJson} />
    <Separator />
    <WorkItemsGrid allWorkItemsJson={data.allWorkItemsJson} />
  </div>
)

export default WorkItemPageTemplate

export const query = graphql`
  query WorkItemQuery($slug: String!) {
    workItemsJson(slug: { eq: $slug }) {
      slug,
      title,
      details {
        image,
        imageSet,
        video,
        caption,
        aspectRatio
      }
    },
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
