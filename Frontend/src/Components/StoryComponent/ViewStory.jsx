import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams,useNavigate,useSearchParams } from 'react-router-dom'
import './ViewStory.css'
export default function ViewStory() {
   
  const{id}=useParams();
  const[view,setView]=useState(null);
  const navigate=useNavigate();
  const[searchparam]=useSearchParams();
  const total=parseInt(searchparam.get("total"))
  
  useEffect(()=>{
      fetch(`http://localhost:3000/story/${id}`)
      .then(data=> data.json())
      .then(data=> setView(data))
      .catch(err=> console.log(err));
  },[id])

  function backward(){
    const curid=parseInt(id);
    if(curid<=1){
        navigate("/");
    }else{
        navigate(`/story/${curid-1}?total=${total}`);
    }
  }
  function forward(){
      const curid=parseInt(id);
      if(curid>=total){
        navigate('/');
      }else{
         navigate(`/story/${curid+1}?total=${total}`);
      }
  }
  
  return (
    <div className='viewst-ctn'>
    {view?(
    <>
        <button className="arrow left" onClick={backward} ><i className="bi bi-arrow-left-circle-fill"></i></button>
        <img className="story-img" src={view.image} alt="story" />
        <button className="arrow right" onClick={forward}><i class="bi bi-arrow-right-circle-fill"></i></button>
    </>

  ):(
     <h1>Loading</h1>
  )} 
  </div>
  )
}
