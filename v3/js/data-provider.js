import sitedata from '../sitedata.json'
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
}

export default DataProvider
