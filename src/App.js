import { useEffect, useState } from "react";
import axios from "axios";
import { usePosts } from "./hooks/usePosts";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/myModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import "./App.css";
import PostService from "./API/PostService";
import Loader from "./components/UI/loader/Loader";
import { useFetching } from "./hooks/useFetching";

function App() {
  const [posts, setPosts] = useState([
    // { id: 1, title: "a 1", body: "c" },
    // { id: 2, title: "b 2", body: "d" },
    // { id: 3, title: "c 3", body: "a" },
  ]);
  const [filter, setFilter] = useState({
    query: "",
    sort: "",
  });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const posts = await PostService.getAll();
    setPosts(posts);
  });

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (id) => {
    setPosts(posts.filter((p) => p.id !== id));
  };

  // const fetchPosts = async () => {
  //   setIsPostLoading(true);

  //   setIsPostLoading(false);
  // };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="App">
      <MyButton onClick={fetchPosts}>Get user</MyButton>
      <MyButton style={{ marginTop: "20px" }} onClick={() => setModal(true)}>
        Create something
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ marginTop: "10px", marginBottom: "5px" }} />
      <PostFilter filter={filter} setFilter={setFilter} />

      {postError && <h1>Oops, sorry! Something wrong no such. {postError}</h1>}

      {isPostsLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "30px",
          }}
        >
          <Loader />
        </div>
      ) : (
        <PostList posts={sortedAndSearchedPosts} removePost={removePost} />
      )}
    </div>
  );
}

export default App;
