import React from "react"

import "../Styles/sass/main.scss"

const BlogPost = ({ title, author, date, excerpt }) => {
  return (
    <div className="blogPost">
      <div className="meta">
        <h2>{title}</h2>
        <h3>{author}</h3>
        <h4>{date}</h4>
      </div>
      <div className="content">
        <p>{excerpt}</p>
      </div>
    </div>
  )
}

export default BlogPost
