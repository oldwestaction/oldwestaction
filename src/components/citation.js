import React from 'react'
import PropTypes from 'prop-types'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const Citation = ({ label, href }) => (
  <sup
    style={{
      fontSize: `0.5em`,
    }}
  >
    <OutboundLink
      href={href}
      style={{
        color: `#FFCD42`,
        background: `none`,
      }}
    >
      {label}
    </OutboundLink>
  </sup>
)

Citation.propTypes = {
  label: PropTypes.string,
  href: PropTypes.string,
}

export default Citation
