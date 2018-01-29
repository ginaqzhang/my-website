import sitedata from '../sitedata.json'
const assetResolver = require.context('../assets', true)

class DataProvider {
  static getRawData () {
    return sitedata
  }

  static getDataItem (key) {
    return sitedata[key]
  }

  static getAssetUrl (assetFilename) {
    return assetResolver(`./${assetFilename}`)
  }
}

export default DataProvider
