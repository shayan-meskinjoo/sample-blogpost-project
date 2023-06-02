import React, { useContext } from "react";
import { Context } from "../Context";

export default function NewPost() {
  const { title, setTitle, body, setBody, addPost } = useContext(Context);

  return (
    <div>
      <form className="form" onSubmit={(e)=> addPost(e)}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>

        <label htmlFor="body">Post:</label>
        <textarea
          type="text"
          id="body"
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
