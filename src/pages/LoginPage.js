import React, { useContext, useState } from 'react'
import { Navigate } from 'react-router-dom';
import { UserContext } from '../UserContext';

export default function LoginPage() {
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const {setUserInfo} = useContext(UserContext)
  async function login(e){
    e.preventDefault()
    const response = await fetch("https://car-blog-community-backend.onrender.com/login",{
      method:"POST",
      body: JSON.stringify({username,password}),
      headers:{"Content-Type":"application/json","Access-Control-Allow-Headers":"*"},
      credentials:'include'
    })
    if(response.ok){
      response.json().then(userInfo=>{
        setUserInfo(userInfo)
        setRedirect(true)
      })
      
    } else{
      alert('Wrong credentials')
    }
  }

  if(redirect){
    return <Navigate to={'/'}/>
  }

  return (
    <form className='login' onSubmit={login}>
        <input type="text" placeholder='username' value={username}
        onChange={(e) => setUserName(e.target.value)}></input>
        <input type="password" placeholder='password' value={password}
        onChange={(e) => setPassword(e.target.value)}></input>
        <button>Login</button>
    </form>
  )
}
