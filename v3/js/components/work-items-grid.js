import React from 'react'
import GridPane from './grid-pane.js'
import SiteDataProvider from '../data-provider.js'

const WorkItemsGrid = () => {
  let workItems = SiteDataProvider.getDataNode('workItems')

  let gridComponents = workItems.map(item =>
    <GridPane key={item['slug']} {...item} />
  )

  return (
    <div className="work-items-grid">
      {gridComponents}
    </div>
  )
}

export default WorkItemsGrid
