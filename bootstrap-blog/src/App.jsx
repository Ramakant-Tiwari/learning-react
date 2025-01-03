import CreatePost from "./components/CreatePost";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Posts from "./components/Posts";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router";
import PostShow from "./components/PostShow";
import { useContext } from "react";
import { AppContext } from "./AppContext";

function RootLayout() {
  return (
    <>
      <Header />
      <main
        style={{
          overflow: "hidden",
          flex: "1",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <Sidebar />
        <section
          className="p-4 mx-auto"
          style={{ flex: 1, overflowY: "auto", height: "100%" }}
        >
          <Outlet />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  const PostList = useContext(AppContext);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Posts />} />
        <Route path="create-post" element={<CreatePost />} />
        <Route
          path="post/:postid"
          element={<PostShow />}
          loader={({ params }) => {
            const PostList = JSON.parse(localStorage.getItem("PostList"));
            console.log(PostList);
            // Pass the PostList directly here
            const post = PostList.find((p) => p.postid === params.postid || p.postid === +params.postid);
            console.log(params);
            return post || null; // Return the post or null if not found
          }}
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}
