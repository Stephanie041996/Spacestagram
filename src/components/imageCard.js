import React from 'react'
import "./Card.css";
import heartOutline from "../assets/heart-outline.png"; 
import heartFill from "../assets/heart-fill.png";

const ImageCard = (props) =>{

return (
    <>
     <div className="card">
      <div className="card-header">
        <div className="card-title-group">
          <h5 className="card-title">{props.title}</h5>
          <div className="card-date">{props.date}</div>
        </div>
      </div>
      <img className="card-image" src={props.url} alt="LostImage" />
      <div className="card-text">{props.explanation}</div>
      <div className="card-like-bar">
        {props.liked ? (
          <img className="card-like-icon" src={heartFill} alt="likeicon" />
        ) : (
          <img className="card-like-icon" src={heartOutline} alt="likeicon" />
        )}
        <div className="like-text">
          <b>{props.likeCount}</b> likes
        </div>
      </div>
    </div>
  
</>)
}
export default ImageCard;