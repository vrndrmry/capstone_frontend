import { formatISO9075 } from "date-fns";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { UserContext } from "../UserContext";

export default function PostPage() {
  const [postInfo, setPostInfo] = useState(null);
  const { userInfo } = useContext(UserContext);
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://car-blog-community-backend.onrender.com/post/${id}`).then((res) => {
      res.json().then((postInfo) => {
        setPostInfo(postInfo);
      });
    });
  }, []);
  
  if (!postInfo) {
    return "";
  }

  return (
    <div className="post-page">
      <h1>{postInfo.title}</h1>
      <time>{formatISO9075(new Date(postInfo.createdAt))}</time>
      <div className="author">by {postInfo.author.name}</div>
      {userInfo?.id === postInfo.author._id && (
        <div className="edit-row">
          <Link className="edit-btn" to={`/edit/${postInfo._id}`}>
            Edit this Post
          </Link>
          <Link className="edit-btn" to={`/delete/${postInfo._id}`} style={{marginLeft:"30px"}}>
            Delete this Post
          </Link>
        </div>
      )}
      <div className="image">
        <img
          src={`https://car-blog-community-backend.onrender.com/${postInfo.cover}`}
          alt="postimage"
        ></img>
      </div>

      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: postInfo.content }}
      ></div>
    </div>
  );
}
