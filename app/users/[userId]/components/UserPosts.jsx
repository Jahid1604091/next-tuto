import React from 'react'

export default async function UserPosts({promise}) {
    const posts = await promise;
  return (
    <article>
        Posts : {posts.map(post=><li>{post.title}</li>)}
    </article>
  )
}
