import React, { useContext } from 'react'
import { Context } from '../Context'
import PostCard from './PostCard'

export default function Home() {
  const { searchResult } = useContext(Context) 

  return (
    <div>
      {searchResult.length ? (
        searchResult.map(post => <PostCard post={post}/>)
      ) : (
        <h2>There is no post to show.</h2>
      )}
    </div>
  )
}
