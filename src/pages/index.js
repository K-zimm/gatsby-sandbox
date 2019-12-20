import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const indexPage = () => {
  return (
    <div>
      <Layout>
        <h1>Hello,</h1>
        <h2>I am a web devloper</h2>
        <p>Need a developer?</p>
        <Link to="/contact">Contact me.</Link>
      </Layout>
    </div>
  )
}

export default indexPage
