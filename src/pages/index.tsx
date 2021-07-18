import React from 'react'
import PostsList from '../components/PostsList'

const HomePage = () => {
  return (
    <div>
      <PostsList posts={[{label: 'hola'}, {label: 'hola2'}]} />
    </div>
  )
}

export default HomePage