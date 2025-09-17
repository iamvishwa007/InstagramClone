import React from 'react'
import NavBar from './Components/NavComponent/NavBar'
import Posts from './Components/FeedComponent/Posts'

export default function App() {
  return (
    <div className='home-ctn'>
      <div className='sidebar-ctn'><NavBar/></div>
      <div className='post-ctn'><Posts/></div>
      <div className='suggestion-ctn'>Suggestion</div>
    </div>
  )
}
