import React from 'react'
import SiteDataProvider from '../data-provider.js'
import { Link } from 'react-router-dom'

const GridPane = (props) => {
  let image = props['details'][0]['image']

  let backgroundStyle = {
    backgroundImage: `url('${SiteDataProvider.getAssetUrl(image)}')`
  }

  return (
    <Link to={`/work/${props['slug']}`} className="grid-pane">
      <div className="grid-pane__img" style={backgroundStyle} />
      <div className="grid-pane__overlay">
        <div
          className="grid-pane__title"
          dangerouslySetInnerHTML={SiteDataProvider.getMarkdown(props['title'])} />
        <div
          className="grid-pane__blurb"
          dangerouslySetInnerHTML={SiteDataProvider.getMarkdown(props['blurb'])} />
      </div>
    </Link>
  )
}

export default GridPane
