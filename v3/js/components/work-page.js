import React from 'react'
import GridPane from './grid-pane.js'
import SiteDataProvider from '../data-provider.js'

const WorkPage = () => {
  let workItems = SiteDataProvider.getDataItem('workItems')

  let gridComponents = workItems.map(item =>
    <GridPane key={item['slug']} {...item} />
  )

  return (
    <div className="work-page">
      {gridComponents}
    </div>
  )
}

export default WorkPage
