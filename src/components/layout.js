import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

import "./reset.css"
import "./global.css"

const Layout = ({ children }) => (
  <>
    <Helmet>
      <title>anh-thư huỳnh likes the internet</title>
      <link rel="canonical" href="https://anht.hu" />
      <link id="favicon" rel="icon" href="src/images/favicon.png" type="image/png"/>
    </Helmet>
    <div
      style={{
        minHeight: `100vh`,
        maxWidth: 960,
        margin: `0 auto`,
        padding: 20,
        display: `flex`,
        flexDirection: `column`,
        justifyContent: `center`,
        alignItems: `center`,
      }}
    >
      <main>{children}</main>
    </div>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
