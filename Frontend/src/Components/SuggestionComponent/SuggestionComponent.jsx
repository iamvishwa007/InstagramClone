import React, { useEffect, useState } from 'react'
import './SuggestionComponent.css'

export default function SuggestionComponent() {

 const[profile,setProfile]=useState({});
 const[suggestion,setSuggestion]=useState([]);
 useEffect(()=>{
    fetch("http://localhost:3000/profiel")
    .then((res)=> res.json())
    .then((data)=> setProfile(data))
    .catch((error)=> console.log(error));
    
    fetch("http://localhost:3000/suggestions")
    .then((res)=> res.json())
    .then((data)=> setSuggestion(data))
    .catch((error)=> console.log(error));
 },[])


  return (
    <div className='suggestion-outer-ctn'>
        <div className='suggestion-ctn'>
            <div className='suggestion-profile-ctn'>
                <img className="pic" src={profile.profile_pic} alt="profile" />
                <h5>{profile.username}</h5>
                <p className='switch-ctn'>switch</p>
            </div>

            <div className='suggestion-text-ctn'>
                <h1>Sugggestion for you</h1>
                <b>See All</b>
            </div>

           {suggestion.map((s)=> <div className='suggestion-profile-ctn'>
                <img className="pic" src={s.profile_pic} alt="profile" />
                <h5>{s.username}</h5>
                <p className='follow'>Follow</p>
            </div>
)}
        </div>
    </div>
  )
}
