import React from 'react'
import SiteDataProvider from '../data-provider.js'

const InfoBox = ({ title, text }) => {
  let titleComponent = null
  let textComponent = null

  if (title) {
    titleComponent = (
      <div
        className="info-box__title"
        dangerouslySetInnerHTML={SiteDataProvider.getMarkdown(title)} />
    )
  }

  if (text) {
    textComponent = (
      <div
        className="info-box__text"
        dangerouslySetInnerHTML={SiteDataProvider.getMarkdown(text)} />
    )
  }

  return (
    <div className="info-box">
      {titleComponent}
      {textComponent}
    </div>
  )
}

export default InfoBox
