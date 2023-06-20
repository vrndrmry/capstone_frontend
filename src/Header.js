import React, { useContext, useEffect} from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";

export default function Header() {
  const {userInfo,setUserInfo} = useContext(UserContext)
  useEffect(() => {
    fetch(`https://car-blog-community-backend.onrender.com/profile`, {
      credentials: "include",
    }).then((res) => {
      res.json().then((userInfo) => {
        setUserInfo(userInfo)
      });
    });
  }, [setUserInfo]);

  const username = userInfo?.username
  
  function logout(){
    fetch(`https://car-blog-community-backend.onrender.com/logout`, {
      headers:{"Content-Type":"application/json","Access-Control-Allow-Headers":"*"},
      method:'POST',
      credentials:'include'
    })
    setUserInfo(null)
  }

  return (
    <div >
      <header>
        <Link to="/" className="logo">
          Car Blog Community
        </Link>
        <nav>
          {username && (
            <>
              <Link to="/create">Create New Post</Link>
              <Link to="/login" onClick={logout}>Logout</Link>
            </>
          )}
          {!username && (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
          
        </nav>
      </header>
      <hr></hr>
    </div>
  );
}
