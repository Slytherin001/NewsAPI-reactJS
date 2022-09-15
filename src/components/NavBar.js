import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = (props) => {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <strong>The Daily Prophet</strong>
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
              <li
                className="nav-item"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Home"
              >
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li
                className="nav-item"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="About"
              >
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li
                className="nav-item"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Business"
              >
                <Link className="nav-link" to="/business">
                  Business
                </Link>
              </li>
              <li
                className="nav-item"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Entertainment"
              >
                <Link className="nav-link" to="/entertainment">
                  Entertainment
                </Link>
              </li>
              <li
                className="nav-item"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="General"
              >
                <Link className="nav-link" to="/general">
                  General
                </Link>
              </li>
              <li
                className="nav-item"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Health"
              >
                <Link className="nav-link" to="/health">
                  Health
                </Link>
              </li>
              <li
                className="nav-item"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Science"
              >
                <Link className="nav-link" to="/science">
                  Science
                </Link>
              </li>
              <li
                className="nav-item"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Sports"
              >
                <Link className="nav-link" to="/sports">
                  Sports
                </Link>
              </li>
              <li
                className="nav-item"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Technology"
              >
                <Link className="nav-link" to="/technology">
                  Technology
                </Link>
              </li>
            </ul>
            <div className="form-check form-switch text-light">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
                onClick={props.toggleMode}
                style={{ cursor: 'pointer' }}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
                style={{ cursor: 'pointer' }}
              >
                <strong>{props.modeBtn}</strong>
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
