import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { UserContextProvider } from "./UserContext";
import CreatePost from "./pages/CreatePost";
import PostPage from "./pages/PostPage";
import EditPost from "./pages/EditPost";
import DeletePost from "./pages/DeletePost";

function App() {
  return (
    <div>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<IndexPage />}></Route>
            <Route path={`/login`} element={<LoginPage />}></Route>
            <Route path={`/register`} element={<RegisterPage />}></Route>
            <Route path={`/create`} element={<CreatePost />}></Route>
            <Route path={`/post/:id`} element={<PostPage/>}></Route>
            <Route path={`/edit/:id`} element={<EditPost/>}></Route>
            <Route path={`/delete/:id`} element={<DeletePost/>}></Route>
          </Route>
        </Routes>
      </UserContextProvider>
    </div>
  );
}

export default App;
