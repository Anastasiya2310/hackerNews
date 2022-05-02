import React from 'react'
import Loading from './Loading'
import queryString from 'query-string'
import PostMetaInfo from './PostMetaInfo'
import Title from './Title'
import Comment from './Comment'
import { fetchItem, fetchComments, fetchPosts } from '../utils/api'

export default class Post extends React.Component {
  state = {
    loadingPost: true,
    post: null,
    error: null,
    loadingComments: true,
    comments: null
  }

  componentDidMount() {
    const { id } = queryString.parse(this.props.location.search)

    fetchItem(id)
      .then((post) => {
        this.setState({
          post,
          loadingPost: false
        })

        return fetchComments(post.kids || [])
      })
      .then((comments) => {
        this.setState({
          comments,
          loadingComments: false
        })
      })
      .catch(({ message }) => {
        this.setState({
          error: message,
          loadingComments: false,
          loadingPost: false
        })
      })
  }

  render() {
    const { loadingPost, post, error, comments, loadingComments } = this.state

    if(error) {
      return <p className='center-text error'>{error}</p>
    }

    return (
      <React.Fragment>
        {loadingPost === true 
        ? <Loading text='Fetching data'/>
        : <React.Fragment>
            <h1 className='header'>
              <Title url={post.url} title={post.title} id={post.id}></Title>
            </h1>
            <PostMetaInfo 
              by={post.by}
              time={post.time}
              descendants={post.descendants}
              id={post.id}
            />
            <p dangerouslySetInnerHTML={{ __html: post.text }}/>
        </React.Fragment>
        }
        {loadingComments === true
        ? loadingPost === false && <Loading text='Fetching comments' />
        : <React.Fragment>
            {this.state.comments.map((comment) => {
              <Comment 
                key={comment.id}
                comment={comment}
              />
            })}
          </React.Fragment>
        }
      </React.Fragment>
    )
  }
}

