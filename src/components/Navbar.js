import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {

const color1 = ()=>{document.body.style.backgroundColor = props.tintColors.color1}
const color2 = ()=>{document.body.style.backgroundColor = props.tintColors.color2}
const color3 = ()=>{document.body.style.backgroundColor = props.tintColors.color3}
const color4 = ()=>{document.body.style.backgroundColor = props.tintColors.color4}

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
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
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                {props.aboutText}
              </a>
            </li>
          </ul>
          <form className="d-flex align-items-center">
            {/* <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button> */}
            {props.mode==='dark'?
              <div className={`color-pallete d-flex text-${props.mode==='light'?'dark':'light'}`} style={{marginRight: '1rem'}}>
                <div>Select Tint</div>
                <div className="color1" onClick={color1} style={{backgroundColor: 'yellow', width: '25px', height: '25px', borderRadius: '50%', margin: '0 0.25rem 0 1rem', cursor: 'pointer'}}></div>
                <div className="color2" onClick={color2} style={{backgroundColor: 'blue', width: '25px', height: '25px', borderRadius: '50%', margin: '0 0.25rem', cursor: 'pointer'}}></div>
                <div className="color3" onClick={color3} style={{backgroundColor: 'red', width: '25px', height: '25px', borderRadius: '50%', margin: '0 0.25rem', cursor: 'pointer'}}></div>
                <div className="color4" onClick={color4} style={{backgroundColor: 'green', width: '25px', height: '25px', borderRadius: '50%', margin: '0 0.25rem', cursor: 'pointer'}}></div>
              </div>: <div></div>
            }
            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
              <input onClick={props.toggleMode} className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                Dark Mode
              </label>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

Navbar.defaultProps = { title: "Set title here", aboutText: "About" };
