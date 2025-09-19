import React, { useEffect, useState } from 'react'
import './Profile.css'
import axios from 'axios'
export default function Profile() {
   const[profile,setProfile]=useState(null);
   const[edit,setEdit]=useState(false);
   const[newUsername,setNewUserName]=useState();
   useEffect(()=>{
     axios.get("http://localhost:3000/profile")
     .then(
      data=>{setProfile(data.data);
        setNewUserName(data.data.username);
    })
     .catch(err=> console.log(err))
   },[])

 async function UpdateName(){
    try{
        if(!profile) return;
        const updateProfile={...profile,username:newUsername};
        
        await axios.put(`http://localhost:3000/profile`,updateProfile);
        setProfile(updateProfile);
        setEdit(false);
      }catch(e){
      console.log("error in update the username");
    }
  }

   return (
    <div className='profile-out'>
      {profile ? 
      (
        <div className='profile-in'> 
          <div className='profile-ctn'>
            <img src={profile.profile_pic} alt="profile_pic" />
            <h5>{profile.username}</h5>
          </div>
        <button onClick={()=>setEdit(!edit)}>
           {edit ? "Close Edit" : "Edit Profile"}</button>
        {edit && 
        <div>
           <label>UserName</label>
           <input type='text'
                  value={newUsername}
                  onChange={(e)=>setNewUserName(e.target.value)} />
           <button onClick={UpdateName}>Save</button>
        </div>
        }
        </div>
      )
      :
      <div>Loading</div>}

    </div>
  )
}
