import React from "react"

import Layout from "../components/layout"
import Citation from "../components/citation"

const IndexPage = () => (
  <>
    <Layout>
      <h1 title="you can also write my name 'Anh-Thu Huynh' (i usually do)">anh-thư huỳnh</h1>
      <p>software engineer based in brooklyn, new york. currently working on design systems at&nbsp;
        <a href="http://squareup.com">square</a> and <a href="mailto:ath.huynh@gmail.com">open to interesting freelance opportunities</a>!</p>
      <p>
        previously, i've worked on public data and financial compliance products<Citation label="1"
        href="https://enigma.com" />, small business lending<Citation label="2" href="https://bondstreet.com" />,
        journalism & newsroom tools<Citation label="3" href="https://github.com/newsdev/about-int" />,
        and a national political campaign<Citation label="4"
        href="https://en.wikipedia.org/wiki/Barack_Obama_2012_presidential_campaign" />; i did not study computer
        science<Citation label="5" href="https://sociology.uchicago.edu" />.
      </p>
      <ul style={{
        margin: 0,
        listStyle: `none`,
        display: `flex`,
        justifyContent: `space-between`,
      }}>
        <li><a href="mailto:ath.huynh@gmail.com">email</a></li>
        <li><a href="https://twitter.com/oldwestaction">twitter</a></li>
        <li><a href="https://linkedin.com/in/athuynh">linkedin</a></li>
      </ul>
    </Layout>
  </>
)

export default IndexPage
