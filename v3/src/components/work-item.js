import React from 'react'
import AssetResolver from '../utils/asset-resolver.js'
import ImageSet from './image-set.js'
import InfoBox from './info-box.js'
import Video from './video.js'

class WorkItem extends React.Component {
  render () {
    let item = this.props.itemData

    let itemDetails = item.details
    let { caption: description, textFirst } = itemDetails[0]

    let titleEntryItems = [
      this._createImageComponent(itemDetails[0]),
      <InfoBox title={item.title} text={description} key="info0" />
    ] 

    if (textFirst) {
      titleEntryItems = titleEntryItems.reverse()
    }

    let components = [
      this._createEntryWrapper(titleEntryItems)
    ]

    for (let i = 1; i < itemDetails.length; ++i) {
      let entry = itemDetails[i]
      let entryItems = []

      if (entry.caption) {
        entryItems.push(
          <InfoBox text={entry.caption} key={this._getKey()} />
        )
      }

      if (entry.image) {
        entryItems.push(this._createImageComponent(entry))
      } else if (entry.imageSet) {
        entryItems.push(this._createImageSetComponent(entry))
      } else if (entry.video) {
        entryItems.push(this._createVideComponent(entry))
      }

      components.push(this._createEntryWrapper(entryItems))
    }

    let styles = {}

    if (item.footer) {
      components.push(
        <div
          key="footer"
          className="work-item__footer"
          dangerouslySetInnerHTML={{ __html: item.footer }} />
      )

      // Make room for the footer
      styles['paddingBottom'] = '20px'
    }

    return <div className="work-item" style={styles}>{components}</div>
  }

  _createEntryWrapper (items) {
    return <div className="work-item__entry" key={this._getKey()}>{items}</div>
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
        {this._createSpacerForAspectRatio(entry.aspectRatio || '56.25%')}
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
