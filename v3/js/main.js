/*
 * main.js
 */

import React from 'react'
import ReactDOM from 'react-dom'

import AboutPage from './components/about-page.js'
import Header from './components/header.js'
import Separator from './components/separator.js'
import WorkItem from './components/work-item.js'
import WorkItemsGrid from './components/work-items-grid.js'

import { BrowserRouter as Router, Route } from 'react-router-dom'

const HomePage = () => (
  <WorkItemsGrid />
)

const WorkItemPage = ({ match }) => (
  <div>
    <WorkItem slug={match.params.slug} />
    <Separator />
    <WorkItemsGrid />
  </div>
)

const App = () => (
  <div>
    <Route path="/" component={Header} />
    <Route exact path="/" component={HomePage} />
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
