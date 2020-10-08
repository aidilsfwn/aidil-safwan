import React from 'react'
import PropTypes from 'prop-types'

const Footer = props => (
  <footer id="footer" style={props.timeout ? { display: 'none' } : {}}>
    <p className="copyright">
      &copy; Aidil Safwan 2020. Photos:{' '}
      <a href="https://unsplash.com/@charlesdeluvio?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
        Charles Deluvio @ Unsplash
      </a>
      . Design: <a href="https://html5up.net">HTML5 UP</a>. Built with:{' '}
      <a href="https://www.gatsbyjs.org/">Gatsby.js</a>.
    </p>
  </footer>
)

Footer.propTypes = {
  timeout: PropTypes.bool,
}

export default Footer
