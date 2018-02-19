import React from 'react'
import AssetResolver from '../utils/asset-resolver.js'

const ImageSet = ({ rows, cols, images }) => {
  let gridStyles = {
    gridTemplateRows: `repeat(${rows || 1}, auto)`,
    gridTemplateColumns: `repeat(${cols || 1}, auto)`
  }

  let i = 0
  let imageComponents = images.map(img => {
    let bgStyle = {
      backgroundImage: `url('${AssetResolver.getAssetUrl(img)}')`
    }

    return <div className="image-set__img" key={`img${++i}`} style={bgStyle} />
  })

  return <div className="image-set" style={gridStyles}>{imageComponents}</div>
}

export default ImageSet
