import React, { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "post 1",
      body: "post  bodygggg ggggg gggggggg gg ggggggg gg gggg ggg gggg gggg",
      date: "June 01 2023 / 9:45:30 pm",
    },
    {
      id: 2,
      title: "post 2",
      body: "post  body",
      date: "June 01 2023 / 9:45:30 pm",
    },
    {
      id: 3,
      title: "post 3",
      body: "post  body",
      date: "June 01 2023 / 9:45:30 pm",
    },
  ]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("");
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const navigate = useNavigate();

  const addPost = (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const date = format(new Date(), "MMMM dd yyyy / pp");
    const newPost = { id: id, title: title, body: body, date: date };
    setPosts([...posts, newPost]);
    setTitle("");
    setBody("");
    navigate("/");
  };

  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id != id));
    navigate("/");
  };

  const editPost = (id) => {
    const newDate = format(new Date(), "MMMM dd yyyy / pp");
    const editedPost = {
      id: id,
      title: editTitle,
      body: editBody,
      date: newDate,
    };
    setPosts(posts.map((post) => (post.id == id ? editedPost : post)));
    setEditTitle("");
    setEditBody("");
    navigate("/");
  };

  useEffect(() => {
    const filteredResult = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.body.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResult(filteredResult.reverse());
  }, [posts, search]);

  return (
    <Context.Provider
      value={{
        posts,
        setPosts,
        search,
        setSearch,
        title,
        setTitle,
        body,
        setBody,
        addPost,
        deletePost,
        editTitle,
        editBody,
        setEditBody,
        setEditTitle,
        editPost,
        searchResult,
      }}
    >
      {children}
    </Context.Provider>
  );
};
