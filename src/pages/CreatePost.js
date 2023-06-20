import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Editor from "./Editor";


export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files,setFiles] = useState("")
  const [redirect, setRedirect] = useState(false)
    async function createNewPost(e){
        const data = new FormData()
        data.set('title',title)
        data.set('summary',summary)
        data.set('content',content)
        data.set('files',files[0])
        e.preventDefault()
        const response = await fetch('https://car-blog-community-backend.onrender.com/post',{
            method:"POST",
            body: data,
            headers:{"Access-Control-Allow-Headers":"*"},
            credentials:'include'
        })
        if(response.ok){
            setRedirect(true)
        }
    }
    if(redirect){
        return <Navigate to={`/`}/>
    }
  return (
    <form onSubmit={createNewPost}>
      <input type="title" placeholder={`Title`} value={title} onChange={e=>setTitle(e.target.value)}></input>
      <input type="summary" placeholder={`Summary`} value={summary} onChange={e=>setSummary(e.target.value)}></input>
      <input type="file" onChange={e => setFiles(e.target.files)}></input>
      <Editor value={content} onChange={setContent}/>
      <button style={{ marginTop: "5px" }}>Create Post</button>
    </form>
  );
}
