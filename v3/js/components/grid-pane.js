import React from 'react'
import SiteDataProvider from '../data-provider.js'
import { Link } from 'react-router-dom'

const GridPane = (props) => {
  let backgroundStyle = {
    backgroundImage: `url('${SiteDataProvider.getAssetUrl(props['image'])}')`
  }

  return (
    <Link to={`/work/${props['slug']}`} className="grid-pane">
      <div className="grid-pane__img" style={backgroundStyle} />
      <div className="grid-pane__info-box">
        <h3>{props['title']}</h3>
        <p>{props['short-description']}</p>
      </div>
    </Link>
  )
}

export default GridPane
