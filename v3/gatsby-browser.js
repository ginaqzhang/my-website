import ReactGA from 'react-ga'

ReactGA.initialize('UA-114666768-1')

exports.onRouteUpdate = (state) => {
  ReactGA.pageview(state.location.pathname)
}
