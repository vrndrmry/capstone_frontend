import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import Editor from "./Editor";

export default function EditPost() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState("");
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    fetch(`https://car-blog-community-backend.onrender.com/post/`+id).then((res) => {
      res.json().then((postInfo) => {
        setTitle(postInfo.title);
        setContent(postInfo.content);
        setSummary(postInfo.summary);
      });
    });
  }, []);

  async function updatePost(e) {
    e.preventDefault();
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    data.set("id",id)
    if (files?.[0]) {
      data.set("files", files?.[0]);
    }

    const response = await fetch(`https://car-blog-community-backend.onrender.com/post`, {
      method: "PUT",
      body: data,
      headers:{"Access-Control-Allow-Headers":"*"},
      credentials:'include'
    });
    console.log(response)
    if(response.ok){
        setRedirect(true)
    }
    
  }

  if (redirect) {
    return <Navigate to={`/post/`+id} />;
  }

  return (
    <form onSubmit={updatePost}>
      <input
        type="title"
        placeholder={`Title`}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      <input
        type="summary"
        placeholder={`Summary`}
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
      ></input>
      <input type="file" onChange={(e) => setFiles(e.target.files)}></input>
      <Editor onChange={setContent} value={content} />
      <button style={{ marginTop: "5px" }}>Update Post</button>
    </form>
  );
}
