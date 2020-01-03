import React from "react"
import PropTypes from "prop-types"

const Citation = ({ label, href }) => (
  <sup
    style={{
      fontSize: `0.5em`,
    }}
  >
    <a href={href}
      style={{
        color: `#FFCD42`,
        background: `none`,
      }}
    >
      {label}
    </a>
  </sup>
)

Citation.propTypes = {
  label: PropTypes.string,
  href: PropTypes.string,
}

export default Citation
