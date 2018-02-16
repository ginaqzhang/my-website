import React from 'react'
import SiteDataProvider from '../data-provider'

const ImageSet = ({ rows, cols, images }) => {
  let gridStyles = {
    gridTemplateRows: `repeat(${rows || 1}, 1fr)`,
    gridTemplateColumns: `repeat(${cols || 1}, 1fr)`
  }

  let imageComponents = images.map(img => {
    let bgStyle = {
      backgroundImage: `url('${SiteDataProvider.getAssetUrl(img)}')`
    }

    return <div className="image-set__img" key={img} style={bgStyle} />
  })

  return <div className="image-set" style={gridStyles}>{imageComponents}</div>
}

export default ImageSet
