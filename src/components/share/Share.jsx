import React from 'react'
import './Share.css'
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

export default function Share() {
  return (
    <div className="share">
        <div className="share-wrapper">
            <div className="share-top">
             <img className="share-profile-img" src={require("../../assets/person/person3.jpeg")}></img>
             <input placeholder="Create a post" type="text" className="share-input" />
            </div>
            <hr className="share-hr" />
            <div className="share-btn">
               <div className="share-options">
                <div className="share-option">
                    <PermMediaIcon className="share-icon" />
                  <span className="share-option-text">Photo/Video</span>  
                </div>
                <div className="share-option">
                    <LocalOfferIcon htmlColor='green' className="share-icon" />
                  <span className="share-option-text">Tag</span>  
                </div>
                <div className="share-option">
                    <LocationOnIcon htmlColor='red' className="share-icon" />
                  <span className="share-option-text">Location</span>  
                </div>
                <div className="share-option">
                    <EmojiEmotionsIcon htmlColor='orange' className="share-icon" />
                  <span className="share-option-text">Feelings</span>  
                </div>
                </div> 
                <button className="share-btn">Send</button>

            </div>
        </div>
    </div>
  )
}
