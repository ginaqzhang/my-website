class _AssetResolver {
  initAssetMappingIfNeeded (data) {
    if (!this._map) {
      this._map = {}
      for (let edge of data.edges) {
        let node = edge.node
        this._map[this._getAssetName(node.relativePath)] = node.publicURL
      }
    }
  }

  getAssetUrl (assetName) {
    return this._map[assetName]
  }

  _getAssetName (path) {
    return path.substr(path.lastIndexOf('/') + 1)
  }
}

var _resolver = new _AssetResolver
export default _resolver
