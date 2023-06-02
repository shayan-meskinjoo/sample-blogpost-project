import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ContextProvider } from "./Context";
import Layout from "./components/Layout";
import Home from "./components/Home";
import PostPage from "./components/PostPage";
import NewPost from "./components/NewPost";
import EditPost from "./components/EditPost";

export default function App() {
  return (
    <div className="app">
      <Router>
        <ContextProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="post" element={<NewPost />} />
              <Route path="post/:id" element={<PostPage />} />
              <Route path="edit/:id" element={<EditPost />} />
            </Route>
          </Routes>
        </ContextProvider>
      </Router>
    </div>
  );
}
