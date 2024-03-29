import React from "react"

import Footer from "../components/footer"
import Header from "../components/header"

import "../Styles/sass/main.scss"

const Layout = props => {
  return (
    <div className="container">
      <Header />
      <div className="content">{props.children}</div>
      <Footer />
    </div>
  )
}

export default Layout
