import React from 'react'
import './Post.css'
import { Avatar } from '@mui/material'
import  MoreHorizIcon  from '@mui/icons-material/MoreHoriz'
import  FavoriteBorderIcon  from '@mui/icons-material/FavoriteBorder' 
import  ChatBubbleOutlineIcon  from '@mui/icons-material/ChatBubbleOutline'
import  TelegramIcon from '@mui/icons-material/Telegram'
import  BookmarkBorderIcon  from '@mui/icons-material/BookmarkBorder'

const Post = () => {
  return (
    <div className='post'>
      <div className='post__header'>
        <div className="post__headerAuthor">
        <Avatar>R</Avatar>
        __akashtagram<span>12h</span>
        </div>
     
     <MoreHorizIcon />

      </div>
      <div className="post__image">
        <img src="https://www.shutterstock.com/image-photo/calm-weather-on-sea-ocean-600nw-2212935531.jpg" alt="" />
      </div>

      <div className="post__footer">
        <div className="post__footerIcons">
          <div className="post__iconsMain">
              <FavoriteBorderIcon className='postIcon'/>
              <ChatBubbleOutlineIcon  className='postIcon'/>
              <TelegramIcon className='postIcon'/>
            </div>
            <div className='post__iconSave'>
              <BookmarkBorderIcon className='postIcon' />
            </div>
          </div>
        </div>
        Liked by 21 people.
      </div>
  
  )
}
export default Post