import React from 'react'
import PostMetaInfo from './PostMetaInfo'

export default function Comment({ comment }) {
  return(
    <div className='comment'>
      <PostMetaInfo 
        by={comment.by}
        time={comment.time}
        descendants={comment.descendants}
        id={comment.id}
      />
      <p dangerouslySetInnerHTML={{__html: comment.text }} />
    </div>
  )
}