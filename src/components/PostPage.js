import React from "react";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../Context";

export default function PostPage() {
  const { posts, deletePost } = useContext(Context);
  const { id } = useParams();

  const post = posts.find((post) => post.id == id);

  return (
    <div className="post-page">
      <div className="post-page__back">
        <Link to="..">back</Link>
      </div>
      <div className="post-page__top">
        <h2 className="post-page__title">{post.title}</h2>
        <p className="post-page__date">{post.date}</p>
      </div>
      <div className="post-page__body">
        <p>{post.body}</p>
      </div>
      <div>
        <Link to={`/edit/${id}`}>
          <button className="post-page__btn--edit">Edit</button>
        </Link>
        <button className="post-page__btn--del" onClick={() => deletePost(id)}>
          Delete
        </button>
      </div>
    </div>
  );
}
