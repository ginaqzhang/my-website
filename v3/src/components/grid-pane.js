import React from 'react'
import AssetResolver from '../utils/asset-resolver.js'
import Link from 'gatsby-link'

const GridPane = (props) => {
  let image = props.details[0].image

  let backgroundStyle = {
    backgroundImage: `url('${AssetResolver.getAssetUrl(image)}')`
  }

  return (
    <Link to={`/work/${props.slug}`} className="grid-pane">
      <div className="grid-pane__img" style={backgroundStyle} />
      <div className="grid-pane__overlay">
        <div
          className="grid-pane__title"
          dangerouslySetInnerHTML={{ __html: props.title }}>
        </div>
        <div
          className="grid-pane__blurb"
          dangerouslySetInnerHTML={{ __html: props.blurb }}>
        </div>
      </div>
    </Link>
  )
}

export default GridPane
