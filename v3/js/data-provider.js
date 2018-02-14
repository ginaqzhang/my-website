import MarkdownIt from 'markdown-it'
import sitedata from '../sitedata.json'

const md = new MarkdownIt()
const assetResolver = require.context('../assets', true)

class DataProvider {
  static getRawData () {
    return sitedata
  }

  static getDataNode (key) {
    return sitedata[key]
  }

  static getAssetUrl (assetFilename) {
    return assetResolver(`./${assetFilename}`)
  }

  static getMarkdown (str) {
    return { __html: md.render(str) }
  }
}

export default DataProvider
