import React from 'react'
import AssetResolver from '../utils/asset-resolver.js'
import ImageSet from './image-set.js'
import InfoBox from './info-box.js'
import Video from './video.js'

class WorkItem extends React.Component {
  render () {
    let item = this.props.itemData

    let itemDetails = item.details
    let { image: primaryImage, caption: description } = itemDetails[0]

    let primaryImageBg = {
      backgroundImage: `url('${AssetResolver.getAssetUrl(primaryImage)}')`
    }

    let components = [
      <div className="work-item__img" key="img0" style={primaryImageBg} />,
      <InfoBox title={item.title} text={description} key="info0" />
    ]

    for (let i = 1; i < itemDetails.length; ++i) {
      let entry = itemDetails[i]

      if (entry.image) {
        components.push(this._createImageComponent(entry.image))
      } else if (entry.imageSet) {
        components.push(this._createImageSetComponent(entry.imageSet))
      } else if (entry.video) {
        components.push(this._createVideComponent(entry.video))
      }

      if (entry.caption) {
        components.push(
          <InfoBox text={entry.caption} key={this._getKey()} />
        )
      }
    }

    return <div className="work-item">{components}</div>
  }

  _createImageComponent (image) {
    let imageBg = {
      backgroundImage: `url('${AssetResolver.getAssetUrl(image)}')`
    }

    return (
      <div className="work-item__img" key={this._getKey()} style={imageBg} />
    )
  }

  _createImageSetComponent (imageSet) {
    return (
      <div className="work-item__img-set" key={this._getKey()}>
        <ImageSet
          rows={imageSet.rows}
          cols={imageSet.cols}
          images={imageSet.images} />
      </div>
    )
  }

  _createVideComponent (video) {
    let videoSrc = `${AssetResolver.getAssetUrl(video)}`

    return (
      <div className="work-item__video" key={this._getKey()}>
        <Video source={videoSrc} />
      </div>
    )
  }

  _getKey () {
    if (this._keyCounter === undefined) {
      this._keyCounter = 0
    }

    return `dynamic${this._keyCounter++}`
  }
}

export default WorkItem
