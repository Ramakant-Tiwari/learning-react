import { useContext, useRef, useState } from "react";
import { AppContext } from "../AppContext";

export default function CreatePost() {
  const { addPost } = useContext(AppContext);
  const postText = useRef();
  const postTitle = useRef();

  const handleSubmit = function (e) {
    e.preventDefault();
    if (!postText.current.value || !postTitle.current.value) return;
    const postid = crypto.randomUUID();
    addPost({ title: postTitle.current.value, text: postText.current.value,  postid});
    postTitle.current.value = "";
    postText.current.value = "";
  };

  return (
    <form
      className="mx-auto my-4 border"
      style={{ maxWidth: "75vw" }}
      onSubmit={handleSubmit}
    >
      <div className="form-group m-4">
        <label htmlFor="exampleInputEmail1" className="fs-5">
          Post Title
        </label>
        <input
          type="text"
          className="form-control mt-2 fs-5"
          id="exampleInputEmail1"
          placeholder="Post Title"
          ref={postTitle}
          required
        />
      </div>
      <div className="form-group m-4">
        <label htmlFor="exampleInputPassword1" className="fs-5">
          Post Text
        </label>
        <textarea
          rows={12}
          className="form-control mt-2 fs-5"
          id="exampleInputPassword1"
          placeholder="Post Text"
          ref={postText}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary mx-4 mb-4">
        Submit
      </button>
    </form>
  );
}
