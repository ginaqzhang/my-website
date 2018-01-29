import React from 'react'

const WorkItemPage = ({ match }) => (
  <div className="work-item-page">
    {match.params.slug}
  </div>
)

export default WorkItemPage
