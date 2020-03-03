import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post }) => (
    <article>
        <h3 className="post-title">{post.frontmatter.title}</h3>
        <h4 className="post-date">{post.frontmatter.date}</h4>
        <Link className="post-link" to={post.frontmatter.path}>
            Read More
        </Link>
    </article>
)

export default PostLink