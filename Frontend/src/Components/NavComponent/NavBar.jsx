import React from 'react'
import './NavBar.css'


export default function NavBar() {
  return (
     <div className='Nav-ctn'>
        <div className='NavUpper-ctn'>
            <img src="assets/InstagramText.png" alt='error'/>
            <div className='icons-ctn'><i class="bi bi-house-heart-fill"></i>Home</div>
            <div className='icons-ctn'><i class="bi bi-search-heart-fill"></i>Search</div>
            <div className='icons-ctn'><i class="bi bi-compass-fill"></i>Explore</div>
            <div className='icons-ctn'><i class="bi bi-camera-reels-fill"></i>Reels</div>
            <div className='icons-ctn'><i class="bi bi-chat-heart-fill"></i>Messages</div>
            <div className='icons-ctn'><i class="bi bi-heart-fill"></i>Notifications</div>
            <div className='icons-ctn'><i class="bi bi-plus-square-fill"></i>Create</div>
            <div className='icons-ctn'><i class="bi bi-speedometer"></i>DashBoard</div>
            <div className='icons-ctn'><i class="bi bi-person-circle"></i>Profile</div>
        </div>
        <div className='NavBottom-ctn'>
           <div className='icons-ctn'> <i class="bi bi-list"></i>More</div>
           <div className='icons-ctn'><i class="bi bi-toggles"></i>Theards</div>
        </div>
      </div>
    
  )
}
