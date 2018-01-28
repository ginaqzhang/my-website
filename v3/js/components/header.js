import React from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

const Header = (props) => (
  <div className="header">
    <h1 className="header__title">Gina Zhang</h1>
    <nav className="header__nav">
      <Link
        className={classNames('nav-link', {
          'nav-link--active': props.location.pathname === '/'
        })}
        to="/">
        Work
      </Link>
      <Link
        className={classNames('nav-link', {
          'nav-link--active': props.location.pathname.match(/^\/about\/?$/i)
        })}
        to="/about">
        About
      </Link>
      <a className="nav-link" href="/resume.pdf">Resume</a>
    </nav>
  </div>
)

export default Header
