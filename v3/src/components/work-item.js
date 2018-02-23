import React from 'react'
import AssetResolver from '../utils/asset-resolver.js'
import ImageSet from './image-set.js'
import InfoBox from './info-box.js'
import Video from './video.js'

class WorkItem extends React.Component {
  render () {
    let item = this.props.itemData

    let itemDetails = item.details
    let { caption: description } = itemDetails[0]

    let components = [
      this._createImageComponent(itemDetails[0]),
      <InfoBox title={item.title} text={description} key="info0" />
    ]

    for (let i = 1; i < itemDetails.length; ++i) {
      let entry = itemDetails[i]

      if (entry.image) {
        components.push(this._createImageComponent(entry))
      } else if (entry.imageSet) {
        components.push(this._createImageSetComponent(entry))
      } else if (entry.video) {
        components.push(this._createVideComponent(entry))
      }

      if (entry.caption) {
        components.push(
          <InfoBox text={entry.caption} key={this._getKey()} />
        )
      }
    }

    return <div className="work-item">{components}</div>
  }

  _createImageComponent (entry) {
    let imageBg = {
      backgroundImage: `url('${AssetResolver.getAssetUrl(entry.image)}')`
    }

    return (
      <div className="work-item__img" key={this._getKey()} style={imageBg}>
        {this._createSpacerForAspectRatio(entry.aspectRatio)}
      </div>
    )
  }

  _createImageSetComponent (entry) {
    let imageSet = JSON.parse(entry.imageSet)

    return (
      <div className="work-item__img-set" key={this._getKey()}>
        <ImageSet data={imageSet} />
        {this._createSpacerForAspectRatio(entry.aspectRatio)}
      </div>
    )
  }

  _createVideComponent (entry) {
    let videoSrc = `${AssetResolver.getAssetUrl(entry.video)}`

    return (
      <div className="work-item__video" key={this._getKey()}>
        <Video source={videoSrc} />
      </div>
    )
  }

  _createSpacerForAspectRatio (aspectRatio) {
    let style = { paddingBottom: aspectRatio || '75%' }
    return <div style={style} />
  }

  _getKey () {
    if (this._keyCounter === undefined) {
      this._keyCounter = 0
    }

    return `dynamic${this._keyCounter++}`
  }
}

export default WorkItem
