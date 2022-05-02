import React from 'react'
import PropTypes from 'prop-types'
import Title from './Title'
import PostMetaInfo from './PostMetaInfo'

export default function PostsList({ posts }) {
  if(posts.length === 0) {
    return (
      <p className="center-text">No posts</p>
    )
  }

  return (
    <ul>
      {posts.map((post) => {
        return(
          <li key={post.id} className="post">
            <Title 
              url={post.url}
              title={post.title}
              id={post.id}
            />
            <PostMetaInfo 
              by={post.by}
              time={post.time}
              descendants={post.descendants}
              id={post.id}
            />
          </li>
        )
      })}
    </ul>
  )
}

PostsList.propTypes = {
  posts: PropTypes.array.isRequired
}