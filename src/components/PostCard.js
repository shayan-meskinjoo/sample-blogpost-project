import React from "react";
import { Link } from "react-router-dom";

export default function PostCard({ post: { id, title, body, date } }) {
  return (
    <div className="post-card">
      <Link to={`post/${id}`} className="post-card__link">
        <div className="post-card__top">
          <h2 className="post-card__title">{title}</h2>
          <p className="post-card__date">{date}</p>
        </div>
        <p className="post-card__body">
          {body.length <= 25 ? body : `${body.slice(0, 25)}...`}
        </p>
      </Link>
    </div>
  );
}
