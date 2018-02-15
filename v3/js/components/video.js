import React from 'react'
import videojs from 'video.js'

class Video extends React.Component {
  componentDidMount () {
    this.player = videojs(this.videoNode, this._createVideoProps(this.props))
  }

  componentWillUnmount () {
    if (this.player) {
      this.player.dispose()
    }
  }

  render () {
    return (
      <div className="video" data-vjs-player>
        <video
          className="video-js vjs-big-play-centered"
          ref={ node => this.videoNode = node } />
      </div>
    )
  }

  _createVideoProps (props) {
    return {
      controls: true,
      sources: [{
        src: props['source'],
        type: props['type'] || 'video/mp4'
      }]
    }
  }
}

export default Video
