import React from 'react'
import Link from 'gatsby-link'
import classNames from 'classnames'

const Header = (props) => (
  <div className="header">
    <h1 className="header__title">
      <Link to="/" className="title-link">Gina Zhang</Link>
    </h1>
    <nav className="header__nav">
      <Link
        to="/"
        className={classNames('nav-link', {
          'nav-link--active': props.location.pathname.match(/^\/(work.*)?\/?$/i)
        })}>
        Work
      </Link>
      <Link
        to="/about"
        className={classNames('nav-link', {
          'nav-link--active': props.location.pathname.match(/^\/about\/?$/i)
        })}>
        About
      </Link>
      <a className="nav-link" href="/resume.pdf">Resume</a>
    </nav>
  </div>
)

export default Header
