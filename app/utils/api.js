const api = `https://hacker-news.firebaseio.com/v0`
const json = '.json?print=pretty'

function removeDead(posts) {
  return posts.filter(Boolean).filter(({ dead }) => dead !== true)
}

function removeDeleted(posts){
  return posts.filter(Boolean).filter(({ deleted }) => deleted !== true)
}

function seeComments(posts) {
  return posts.filter(({ type }) => type === 'comment')
}

function seePosts(posts) {
  return posts.filter(({ type }) => type === 'story')
}

export function fetchItem(id) {
  return fetch(`${api}/item/${id}${json}`)
    .then((res) => res.json())
}

export function fetchComments(ids) {
  return Promise.all(ids.map(fetchItem))
    .then((comments) => removeDeleted(seeComments(removeDead(comments))))
}

export function fetchPosts(ids) {
  return Promise.all(ids.map(fetchItem))
    .then((posts) => removeDeleted(seePosts(removeDead(posts))))
}

export function fetchMainPosts(type) {
  return fetch(`${api}/${type}stories${json}`)
    .then((res) => res.json())
    .then((ids) => {
      if(!ids) {
        throw new Error(`Error fetching the ${type} posts`)
      }
      return ids.slice(0,50);
    })
    .then((ids) => Promise.all(ids.map(fetchItem)))
    .then((posts) => removeDeleted(seePosts(removeDead(posts))))
}

export function fetchUser(id) {
  return fetch(`${api}/user/${id}${json}`)
  .then((res) => res.json())
}