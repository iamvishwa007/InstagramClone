import React from 'react'
import Story from './Story'
import Post from './Post'

export default function Posts() {
  return (
    <div className='Posts-ctn'>
      <div ><Story/></div>
      <div className='Postspost-ctn'><Post/></div>
    </div>
  )
}
