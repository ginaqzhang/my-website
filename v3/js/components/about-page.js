import React from 'react'
import InfoBox from './info-box.js'
import SiteDataProvider from '../data-provider.js'

const AboutPage = () => {
  let pageData = SiteDataProvider.getDataNode('about')

  let imageUrl = `url('${SiteDataProvider.getAssetUrl(pageData['image'])}')`
  let backgroundStyle = { backgroundImage: imageUrl }

  let i = 0
  let socialIconComponents = pageData['socialIcons'].map(entry => {
    let iconAsset = `url('${SiteDataProvider.getAssetUrl(entry['icon'])}')`
    let iconStyle = { backgroundImage: iconAsset }

    return (
      <a
        className="social-icon"
        href={entry['link']}
        key={i++}>
        <div className="social-icon__img" style={iconStyle} />
      </a>
    )
  })

  return (
    <div className="about-page">
      <div className="about-page__img" style={backgroundStyle} />
      <InfoBox title={pageData['title']} text={pageData['text']} />
      <div className="about-page__social-icons">
        {socialIconComponents}
      </div>
    </div>
  )
}

export default AboutPage
