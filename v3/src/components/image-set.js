import React from 'react'
import AssetResolver from '../utils/asset-resolver.js'

class ImageSet extends React.Component {
  render () {
    let data = this.props.data
    let grid = Array.isArray(data) ? data : data.images

    let gridStyles = {
      gridTemplateRows: `repeat(${grid.length}, auto)`,
    }

    let rowComponents = grid.map(row => this._createRow(row))
    return <div className="image-set" style={gridStyles}>{rowComponents}</div>
  }

  _createRow(images) {
    let imageComponents = images.map(img => {
      let style = {}

      if (typeof img === 'string') {
        style['backgroundImage'] = `url('${AssetResolver.getAssetUrl(img)}')`
        style['flex'] = '1 1 auto'
      } else {
        style['backgroundImage'] = `url('${AssetResolver.getAssetUrl(img.asset)}')`
        style['flex'] = `0 1 ${img.width}`
      }

      return (
        <div className="image-set__img" key={this._getKey()} style={style} />
      )
    })

    return (
      <div className="image-set__row" key={this._getKey()}>
        {imageComponents}
      </div>
    )
  }

  _getKey() {
    if (this._key === undefined) {
      this._key = 0
    }

    return this._key++
  }
}

export default ImageSet
