import React from 'react'

const InfoBox = ({ title, text }) => {
  let titleComponent = null
  let textComponent = null

  if (title) {
    titleComponent = (
      <div
        className="info-box__title"
        dangerouslySetInnerHTML={{ __html: title }} />
    )
  }

  if (text) {
    textComponent = (
      <div
        className="info-box__text"
        dangerouslySetInnerHTML={{ __html: text }} />
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
