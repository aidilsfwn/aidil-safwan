import PropTypes from 'prop-types'
import React from 'react'

import AidilAvatar from '../images/avatar-aidilsafwancom.png'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span>
        <img src={AidilAvatar} width="100%" />
      </span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Aidil Safwan</h1>
        <p>React Native Developer @ Aleph-Labs</p>
        <ul className="icons" style={{ marginTop: '5vh' }}>
          <li>
            <a
              href="https://www.twitter.com/jhendilson"
              className="icon fa-twitter"
            >
              <span className="label">Twitter</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/aidilsfwn"
              className="icon fa-facebook"
            >
              <span className="label">Facebook</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/jhendilson"
              className="icon fa-instagram"
            >
              <span className="label">Instagram</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/aidilsafwan"
              className="icon fa-linkedin"
            >
              <span className="label">LinkedIn</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('skills')
            }}
          >
            Skills
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('profile')
            }}
          >
            Profile
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            Intro
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
        {/* <li>
          <a href="http://aidilsfwn.com">
            <button>Blog</button>
          </a>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('covid-19')
            }}
          >
            Covid-19
          </button>
        </li> */}
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
