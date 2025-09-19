import React from 'react'
import './NavBar.css'
import { useNavigate } from 'react-router-dom'

export default function NavBar() {
   const navigate=useNavigate();

  return (
     <div className='Nav-ctn'>
        <div className='NavUpper-ctn'>
            <img src="assets/InstagramText.png" alt='error'/>
            <div className='icons-ctn'><i className="bi bi-house-heart-fill"></i>Home</div>
            <div className='icons-ctn'><i className="bi bi-search-heart-fill"></i>Search</div>
            <div className='icons-ctn'><i className="bi bi-compass-fill"></i>Explore</div>
            <div className='icons-ctn'><i className="bi bi-camera-reels-fill"></i>Reels</div>
            <div className='icons-ctn'><i className="bi bi-chat-heart-fill"></i>Messages</div>
            <div className='icons-ctn'><i className="bi bi-heart-fill"></i>Notifications</div>
            <div className='icons-ctn'><i className="bi bi-plus-square-fill"></i>Create</div>
            <div className='icons-ctn'><i className="bi bi-speedometer"></i>DashBoard</div>
            <div onClick={()=>{
               navigate('/profile')
            }} className='icons-ctn'><i className="bi bi-person-circle"></i>Profile</div>
        </div>
        <div className='NavBottom-ctn'>
           <div className='icons-ctn'> <i className="bi bi-list"></i>More</div>
           <div className='icons-ctn'><i className="bi bi-toggles"></i>Theards</div>
        </div>
      </div>
    
  )
}
