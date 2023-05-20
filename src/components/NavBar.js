import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function NavBar(props) {
    console.log(props.theme)
  return (
    <nav className={`navbar navbar-expand-lg text-${props.theme==='light'?'black':'light'} bg-${props.theme}`}>
  <div className="container-fluid">
    <Link className={`navbar-brand text-${props.theme==='light'?'black':'light'}`} to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link active text-${props.theme==='light'?'black':'light'}`} aria-current="page" to="/">Home</Link>
        </li>
        
      </ul>
      <div className="form-check form-switch">
  <input className="form-check-input text-white" type="checkbox" onClick={props.toggleTheme} role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{`Enable ${props.theme==='light'?'black':'light'} mode`}</label>
</div>
    </div>
  </div>
</nav>
  )
}
NavBar.propTypes = {
    title: PropTypes.string.isRequired,
    theme:PropTypes.string.isRequired
}
