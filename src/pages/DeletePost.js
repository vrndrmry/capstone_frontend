import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../UserContext";
import { Navigate, useParams } from "react-router-dom";

export default function DeletePost() {
  const [postInfo, setPostInfo] = useState(null);
  const { userInfo } = useContext(UserContext);
  const [redirect, setRedirect] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://car-blog-community-backend.onrender.com/post/` + id).then((res) => {
      res.json().then((postInfo) => {
        setPostInfo(postInfo);
      });
    });
  }, []);

  async function deletePost(e) {
    e.preventDefault();
    const response = await fetch(`https://car-blog-community-backend.onrender.com/post/` + id, {
      method: "DELETE",
      headers:{"Content-Type":"application/json","Access-Control-Allow-Headers":"*"},
      credentials: "include",
    }).then((res) => {
      if (res.ok) {
        setRedirect(true);
      }
    });
  }

  if (redirect) {
    return <Navigate to={"/"} />;
  }
  return (
    <div>
      <button onClick={deletePost}>Click here to confirm Delete</button>
    </div>
  );
}
