import React from 'react'
import InfoBox from './info-box.js'
import SiteDataProvider from '../data-provider.js'
import Video from './video.js'

const WorkItem = ({ slug }) => {
  let item = SiteDataProvider.getDataNode('workItems').find(
    x => x['slug'] == slug
  )

  let itemDetails = item['details']
  let { image: primaryImage, caption: description } = itemDetails[0]

  let primaryImageBg = {
    backgroundImage: `url('${SiteDataProvider.getAssetUrl(primaryImage)}')`
  }

  let components = [
    <div className="work-item__img" key="img0" style={primaryImageBg} />,
    <InfoBox title={item['title']} text={description} key="info0" />
  ]

  for (let i = 1; i < itemDetails.length; ++i) {
    let { image, video, caption } = itemDetails[i]

    if (image) {
      let imageBg = {
        backgroundImage: `url('${SiteDataProvider.getAssetUrl(image)}')`
      }

      components.push(
        <div className="work-item__img" key={`img${i}`} style={imageBg} />
      )
    } else if (video) {
      let videoSrc = `/${SiteDataProvider.getAssetUrl(video)}`

      components.push(
        <div className="work-item__video" key={`video${i}`}>
          <Video source={videoSrc} key={`video${i}`} />
        </div>
      )
    }

    if (caption) {
      components.push(<InfoBox text={caption} key={`info${i}`} />)
    }
  }

  return <div className="work-item">{components}</div>
}

export default WorkItem
