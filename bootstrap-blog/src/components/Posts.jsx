import { useContext } from "react";
import { AppContext } from "../AppContext";
import Post from "./Post";

export default function Posts() {
  const { PostList } = useContext(AppContext);
  return (
    <section>
      {PostList.map(post => <Post post={post} key={post.postid} />)}
    </section>
  );
}
