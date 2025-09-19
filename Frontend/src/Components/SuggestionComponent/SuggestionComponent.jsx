import React, { useEffect, useState } from 'react'
import './SuggestionComponent.css'
import axios from 'axios';

export default function SuggestionComponent() {

 const[profile,setProfile]=useState({});
 const[suggestion,setSuggestion]=useState([]);
 useEffect(()=>{
    fetch("http://localhost:3000/profile")
    .then((res)=> res.json())
    .then((data)=> setProfile(data))
    .catch((error)=> console.log(error));
    
    fetch("http://localhost:3000/suggestions")
    .then((res)=> res.json())
    .then((data)=> setSuggestion(data))
    .catch((error)=> console.log(error));
 },[])

 function addFollower(id,username,profile_pic){
    const newfollower={
      id:id,
      username:username,
      profile_pic:profile_pic
    }
    axios.post(`http://localhost:3000/followers`,newfollower)
    .then((res)=>{
        console.log("sucess",res.data)
        axios.delete(`http://localhost:3000/suggestions/${id}`)
        .then(() => {
          console.log('Removed from suggestions');
          setSuggestion(prev => prev.filter(s => s.id !== id));
        })
        .catch(err => console.error('Error removing suggestion', err));
    })
    .catch(err=>{console.log(err)});
 }


  return (
    <div className='suggestion-outer-ctn'>
          { profile && profile.username  ?(
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

           {suggestion.map((s)=> 
  <div key={s.id} className='suggestion-profile-ctn'>
    <img className="pic" src={s.profile_pic} alt="profile" />
      <h5>{s.username}</h5>
      <button onClick={()=>addFollower(s.id,s.username,s.profile_pic)}>Follow</button>
  </div>
)}


        </div>
         ): <img className="Loadingass-ctn" src='assets/ModernLoading.gif' alt='LOading..' />}
    </div>
  )
}
