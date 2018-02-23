import React from 'react'
import AssetResolver from '../utils/asset-resolver'
import InfoBox from '../components/info-box.js'

const AboutPage = ({ data }) => {
  let pageData = data.markdownRemark.frontmatter
  let content = data.markdownRemark.html

  let imageUrl = `url('${AssetResolver.getAssetUrl(pageData.image)}')`
  let backgroundStyle = { backgroundImage: imageUrl }

  return (
    <div className="about-page">
      <div className="about-page__img" style={backgroundStyle} />
      <InfoBox title={pageData.title} text={content} />
    </div>
  )
}

export default AboutPage

export const query = graphql`
  query AboutQuery {
    markdownRemark(frontmatter: { path: { eq: "/about" } }) {
      html
      frontmatter {
        title,
        image
      }
    }
  }
`
