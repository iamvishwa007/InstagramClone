import React, { useEffect, useState } from 'react'
import './Story.css'
import { useNavigate } from 'react-router-dom'

export default function Story() {
  const[stories,setStories]=useState([]);
  const navigate = useNavigate();
  

  useEffect(()=>{
    fetch("http://localhost:3000/story")
    .then(data => data.json())
    .then(data => 
      setStories(data))
    .catch(err => console.log(err))
  },[])

  return (
    <div className='story-ctn'>
      {stories.length>0?(
       stories.map((data)=>(
          <div key={data.id} className='story-inner' onClick={()=>navigate(`/story/${data.id}?total=${stories.length}`)} >
              <div className='story-inner-ctn'>
                  <img src={data.user.profilePic} alt="pic" />
              </div>
              <p>{data.user.username}</p>
          </div>
       ))
      )
      :
      <h1>Loading</h1>
      }
    </div>
  )
}
