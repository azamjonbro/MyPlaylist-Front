import React, { useEffect, useState } from 'react'
import PlayImg from "../assets/icons/play-white.svg"
import FormattingMinuts from '../utils/formattingMinutes'
import { Link } from 'react-router-dom'
function AllPlaylist() {
 let [allMusic, setAllMusic] = useState([])
 useEffect(()=>{
  fetch("http://localhost:5000/api/songs")
  .then((res)=> res.json())
  .then((data)=>{
   setAllMusic(data)
   
  })
 },[])

  return (
   <>
   <header className='header'>
      <div className="container header-container">
        <Link to="/">Azamjonbro</Link>
      <div className="header-searchbox">
        <input type="text" placeholder='Search music' className='header-search' />
      </div>
      </div>
    </header>
   <div className="container">
     <div className='allMusics'>
      {
       !allMusic.length?<p>Musics not found</p>:
       allMusic.map((item, index)=>{
        console.log(item);
        
        return(
         <div className='music' key={index} title={item.title}>
           <div className="music-left">
            <div className="playbox">
             <div className="circle" style={{cursor:"pointer"}}>
              <img src={PlayImg} alt="Play Icon svg" loading='lazy' />
             </div>
            </div>
             <div className="titlebox">
              <h2 className='music-title'>{item.title}</h2>
              <p className='small-text'>{item.artist}</p>
             </div>
           </div>
           <div className="music-right">
            {FormattingMinuts(item.duration)}
           </div>
         </div>
        )
       })
      }
    </div>
   </div>
        </>
  )
}

export default AllPlaylist
