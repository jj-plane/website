import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post }) => (
    <article>
        <h3 className="post-title">
            <Link className="post-link" to={post.fields.slug}>
                {post.frontmatter.title}
            </Link>
        </h3>
        <h4 className="post-date">{post.frontmatter.date}</h4>
    </article>
)

export default PostLink