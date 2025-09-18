import React, { useEffect, useState } from 'react'
import './Post.css'

export default function Post() {
    const[posts,setPosts]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:3000/posts")
        .then((res)=> res.json())
        .then((data)=> setPosts(data))
        .catch((e)=>console.log(e));
    },[])

    return (
    <div className='toppost-ctn'>    

        {posts.length==0? <img className="postloading-ctn" src='assets/ModernLoading.gif' alt='Loading'/> : 
        (
        posts.map((post)=>(
         <div key={post.id} className='post-ctn'>
            <div className='header-ctn'>
                  <img src={post.user.profile_pic} alt="profile-pic" />
                  <h5>{post.user.username}</h5>
            </div>
            <img className="image-ctn" src={post.image} alt="post-pic" />
            <div className='icon-ctn'>
                    <i className=" bi bi-heart-fill"></i>
                    <i className=" bi bi-chat"></i>
                    <i className=" bi bi-telegram"></i>
            </div>
            <h4 className='like-ctn'>{post.likes} Likes</h4>
            <p className='caption-ctn'>{post.caption}</p>
        </div>)
                )
                )}   
    </div>

        
    )
}
