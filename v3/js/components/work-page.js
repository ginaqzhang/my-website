import React from 'react'
import GridPane from './grid-pane.js'

const WorkPage = () => {
  let gridComponents = []
  for (let i = 0; i < 12; ++i) {
    gridComponents.push(<GridPane id={i} />)
  }

  return (
    <div className="work-page">
      {gridComponents}
    </div>
  )
}

export default WorkPage
