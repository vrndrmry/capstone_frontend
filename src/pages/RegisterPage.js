import React, { useState } from "react";
import { Navigate } from 'react-router-dom';

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  async function register(e) {
    e.preventDefault();
    const response = await fetch("https://car-blog-community-backend.onrender.com/register", {
      method: "POST",
      body: JSON.stringify({ name, username, password }),
      headers:{"Content-Type":"application/json","Access-Control-Allow-Headers":"*"},
    });
    if(response.status === 200){
        setRedirect(true)
        
    }else{
        alert('Registation failed')
    }
  }
  if(redirect){
    return <Navigate to={'/login'}/>
  }
  return (
    <form className="register" onSubmit={register}>
      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <input
        type="email"
        placeholder="username"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
      ></input>
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <button>Register</button>
    </form>
  );
}
