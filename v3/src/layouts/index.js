import React from 'react'
import AssetResolver from '../utils/asset-resolver.js'
import Header from '../components/header.js'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import '../styles/main.scss'

const TemplateWrapper = ({ children, data, location }) => {
  AssetResolver.initAssetMappingIfNeeded(data.allFile)
  return (
    <div>
      <Helmet
        title={data.site.siteMetadata.title}>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Helmet>
      <Header location={{ pathname: location.pathname }} />
      <div>
        {children()}
      </div>
    </div>
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

export const query = graphql`
  query IndexTemplateQuery {
    site {
      siteMetadata {
        title
      }
    },
    allFile(filter: { relativePath: { regex: "/^assets\//" } }) {
      edges {
        node {
          publicURL,
          relativePath
        }
      }
    }
  }
`
