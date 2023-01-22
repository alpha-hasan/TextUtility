import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './navbar.css'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode === 'light' ? 'light' : 'dark'}`} style={{ backgroundColor: props.mode === 'light' ? 'white' : 'rgb(39, 43, 51)' }}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.aboutText}
              </Link>
            </li>
          </ul>
          {
            (props.mode === 'dark') ?
              <div className="form-check form-switch text-light">
                <input className="form-check-input" onClick={props.toggleMode} style={{ backgroundColor: 'black', border: '1px solid rgba(255,255,255)', backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'><circle r='3' fill='rgba(255, 255, 255)'/></svg>")` }} type="checkbox" role="switch" id="flexSwitchCheckChecked" defaultChecked />
                <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Enable Dark Mode</label>
              </div>
              :
              <div className="form-check form-switch">
                <input className="form-check-input" onClick={props.toggleMode} style={{ border: '1px solid rgba(0,0,0)', backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'><circle r='3' fill='rgba(0, 0, 0)'/></svg>")` }} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
              </div>
          }

        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired
}
Navbar.defaultProps = {
  title: 'TextUtils',
  aboutText: 'About'
}