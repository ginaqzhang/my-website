import React from 'react'
import GridPane from './grid-pane.js'

const WorkItemsGrid = ({ allWorkItemsJson }) => {
  let gridComponents = allWorkItemsJson.edges.map(edge =>
    <GridPane key={edge.node.slug} {...edge.node} />
  )

  return (
    <div className="work-items-grid">
      {gridComponents}
    </div>
  )
}

export default WorkItemsGrid
