import React,{ useEffect, useContext } from "react";
import { useParams } from 'react-router-dom'
import { Context } from "../Context";

export default function EditPost() {
  const { posts, editTitle, setEditTitle, editBody, setEditBody, editPost } =
    useContext(Context);

  const { id } = useParams();
  const post = posts.find((post) => post.id == id);

  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  }, [post, setEditBody, setEditTitle]);

  return (
    <div>
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          required
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
        ></input>

        <label htmlFor="body">Post:</label>
        <textarea
          type="text"
          id="body"
          required
          value={editBody}
          onChange={(e) => setEditBody(e.target.value)}
        ></textarea>

        <button type="submit" onClick={() => editPost(id)}>
          Submit
        </button>
      </form>
    </div>
  );
}
