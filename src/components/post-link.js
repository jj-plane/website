import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post }) => (
    <article>
        <Link className="post-link" to={post.frontmatter.path}>
            <h3 className="post-title">{post.frontmatter.title}</h3>
        </Link>
        <h4 className="post-date">{post.frontmatter.date}</h4>
    </article>
)

export default PostLink