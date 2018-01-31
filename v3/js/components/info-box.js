import React from 'react'

const InfoBox = ({ title, text }) => {
  let titleComponent = title ? <h3>{title}</h3> : null
  let textComponent = text ? <p>{text}</p> : null

  return (
    <div className="info-box">
      {titleComponent}
      {textComponent}
    </div>
  )
}

export default InfoBox
