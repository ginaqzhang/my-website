import React from 'react'
import SiteDataProvider from '../data-provider.js'

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
    <div className="work-item__info-box" key="info0">
      <h3>{item['title']}</h3>
      <p>{description}</p>
    </div>
  ]

  for (let i = 1; i < itemDetails.length; ++i) {
    let { image, caption } = itemDetails[i]

    let imageBg = {
      backgroundImage: `url('${SiteDataProvider.getAssetUrl(image)}')`
    }

    components.push(
      <div className="work-item__img" key={`img${i}`} style={imageBg} />
    )

    if (caption) {
      components.push(
        <div className="work-item__info-box" key={`info${i}`}>
          <p>{caption}</p>
        </div>
      )
    }
  }

  return <div className="work-item">{components}</div>
}

export default WorkItem
