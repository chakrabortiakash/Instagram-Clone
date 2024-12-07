import React, { useState } from 'react'
import './Timeline.css'
import Sugesstion from './Sugesstion'
import Post from "./posts/Post";

const Timeline = () => {
  const [posts, setPosts] = useState([
   {
    
  
   }

  ]);
  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
         <Post />
         <Post />
         <Post />
         <Post />
        </div>
      </div>
        <div className="timeline__right">
            <Sugesstion />
        </div>
      </div>

  )
}

export default Timeline;
