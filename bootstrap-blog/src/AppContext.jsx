import { createContext, useEffect, useState } from "react";

export const AppContext = createContext({
  PostList: [],
  addPost: () => {},
  deletePost: () => {},
});

export default function ContextProvider({ children }) {
  const [PostList, setPostList] = useState(
    JSON.parse(localStorage.getItem("PostList"))
  );

  const addPost = function (post) {
    const updatedPostList = [post, ...PostList];
    setPostList(updatedPostList);
  };

  const deletePost = function (postid) {
    const updatedPostList = PostList.filter((post) => post.postid !== postid);
    setPostList(updatedPostList);
  };

  useEffect(() => {
    localStorage.setItem("PostList", JSON.stringify(PostList));
  }, [PostList]);

  return (
    <AppContext.Provider value={{ PostList, addPost, deletePost }}>
      {children}
    </AppContext.Provider>
  );
}
