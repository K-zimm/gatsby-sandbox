import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import headerStyles from "./header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <div className={headerStyles.header}>
      <nav className={headerStyles.header_nav}>
        <div className="logo-container">
          <Link
            to="/"
            className={headerStyles.logo}
            activeClassName={headerStyles.navList_itemActive}
          >
            <h1>{data.site.siteMetadata.title}</h1>
          </Link>
        </div>
        <ul className={headerStyles.navList}>
          <li>
            <Link
              to="/"
              className={headerStyles.navList_item}
              activeClassName={headerStyles.navList_itemActive}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={headerStyles.navList_item}
              activeClassName={headerStyles.navList_itemActive}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className={headerStyles.navList_item}
              activeClassName={headerStyles.navList_itemActive}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={headerStyles.navList_item}
              activeClassName={headerStyles.navList_itemActive}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
