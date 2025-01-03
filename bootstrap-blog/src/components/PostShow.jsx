import { useContext } from "react";
import { useLoaderData, useParams } from "react-router";
import { AppContext } from "../AppContext";

export default function PostShow() {
  const post = useLoaderData(); // Use useLoaderData to get the post data

  if (!post) {
    return <div className="m-5">Post not found.</div>; // Handle the case where no post is found
  }

  return (
    <div className="card m-5">
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.text}</p>
      </div>
    </div>
  );
}
