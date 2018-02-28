import React from 'react'
import AssetResolver from '../utils/asset-resolver.js'
import Link from 'gatsby-link'
import classNames from 'classnames'

const GridPane = (props) => {
  let image = props.details[0].image

  let backgroundStyle = {
    backgroundImage: `url('${AssetResolver.getAssetUrl(image)}')`,
    backgroundPosition: props.details[0].imageAlignment
  }

  return (
    <Link
      to={`/work/${props.slug}`}
      className={classNames('grid-pane', {
        'grid-pane--bordered': props.details[0].hasBorder,
        'grid-pane--no-hover': props.noHover
      })}>
      <div className="grid-pane__img" style={backgroundStyle} />
      <div className="grid-pane__overlay">
        <div className="grid-pane__overlay-content">
          <div
            className="grid-pane__title"
            dangerouslySetInnerHTML={{ __html: props.title }}>
          </div>
          <div
            className="grid-pane__blurb"
            dangerouslySetInnerHTML={{ __html: props.blurb }}>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default GridPane
