import { useContext } from "react";
import { AppContext } from "../AppContext";
import { useNavigate } from "react-router";

export default function Post({ post }) {
  const { deletePost } = useContext(AppContext);
  const navigate = useNavigate();
  return (
    <div className="card m-5">
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.text}</p>
        <button
          className="btn btn-primary"
          style={{ marginRight: "1rem" }}
          onClick={() => {navigate(`post/${post.postid}`)}}
        >
          Show Post
        </button>
        <button
          className="btn btn-primary"
          onClick={() => deletePost(post.postid)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
