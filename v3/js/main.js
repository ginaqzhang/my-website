/*
 * main.js
 */

import React from 'react'
import ReactDOM from 'react-dom'

import AboutPage from './components/about-page.js'
import Header from './components/header.js'
import WorkPage from './components/work-page.js'
import WorkItemPage from './components/work-item-page.js'

import { BrowserRouter as Router, Route } from 'react-router-dom'

const App = () => (
  <div>
    <Route path="/" component={Header} />
    <Route exact path="/" component={WorkPage} />
    <Route path="/work/:slug" component={WorkItemPage} />
    <Route path="/about" component={AboutPage} />
  </div>
)

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('target')
)
