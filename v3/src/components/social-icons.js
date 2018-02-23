import React from 'react'
import AssetResolver from '../utils/asset-resolver.js'

const SocialIcons = ({ data }) => {
  let i = 0
  let socialIconComponents = data.map(entry => {
    let iconAsset = `url('${AssetResolver.getAssetUrl(entry.icon)}')`
    let iconStyle = { backgroundImage: iconAsset }

    return (
      <a
        className="social-icon"
        href={entry.link}
        key={i++}>
        <div className="social-icon__img" style={iconStyle} />
      </a>
    )
  })

  return (
    <div className="social-icons">{socialIconComponents}</div>
  )
}

export default SocialIcons
