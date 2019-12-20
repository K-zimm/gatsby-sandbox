import React from "react"

import Layout from "../components/layout"
import BlogPost from "../components/blogPost"
import { graphql, useStaticQuery } from "gatsby"

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            html
            excerpt(pruneLength: 150)
          }
        }
      }
    }
  `)
  let blogPosts = data.allMarkdownRemark.edges
  console.log(blogPosts)
  return (
    <div>
      <Layout>
        <h1>Blog</h1>
        <p>Posts will be here</p>
        {blogPosts.map(post => (
          <BlogPost
            title={post.node.frontmatter.title}
            date={post.node.frontmatter.date}
            author="Kyle Zimmer"
            excerpt={post.node.excerpt}
          ></BlogPost>
        ))}
        <h2>{blogPosts[0].node.frontmatter.title}</h2>
      </Layout>
    </div>
  )
}

export default Blog
