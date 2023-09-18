import React from 'react';
import { useState } from "react";
import './Post.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import IosShareIcon from '@mui/icons-material/IosShare';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Users } from '../../vredditdData';



export default function Post({post}) {
    const [like, setLike] = useState(post.like)
    const [isLiked, setIsLiked] = useState(false)

    const likeHandler =()=>{
        setLike(isLiked ? like-1 : like+1)
        setIsLiked(!isLiked)
    }
    

  return (
    <div className="post">
        <div className="post-wrapper">
            <div className="post-top">
                <div className="post-top-left">
                  <img className="post-profile-img" src={Users.filter((u) => u.id === post.userId)[0].profilePictures} alt="profile-img" />  
                  <span className="post-user-name">{Users.filter((u) => u.id === post.userId)[0].userName}</span>
                  <span className="post-data">{post.date}</span>
                </div>
                <div className="post-top-right">
                    <MoreVertIcon />
                </div>
            </div>
            <div className="post-center">
                <span className="post-text">{post?.desc}</span>
                <img className="post-img" src={post?.photo} />
            </div>
            <div className="post-btn">
                <div className="post-btn-left">
                    <ArrowUpwardIcon className="post-icon" />
                    <span className="post-icon-count"></span>
                    <ModeCommentIcon className="post-icon" />
                    <span className="post-icon-count">{post.comment} comment</span>
                    <IosShareIcon className="post-icon" />
                    <span className="post-icon-count">{post.share}</span>
                    <FavoriteBorderIcon className="post-icon-like" onClick={likeHandler} />
                    <span className="post-icon-count">{like}</span>
                </div>
              
            </div>
        </div>
    </div>
  )
}
