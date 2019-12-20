import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const about = () => {
  return (
    <div>
      <Layout>
        <h1>Forward Thinking</h1>
        <p>I like to code, and my code will take me to great places.</p>
        <Link to="/contact">Go there with me.</Link>
      </Layout>
    </div>
  )
}

export default about
