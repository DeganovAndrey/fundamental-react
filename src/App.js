import { useMemo, useState } from "react";
import "./App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/myModal/MyModal";
import MyButton from "./components/UI/button/MyButton";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "a 1", body: "c" },
    { id: 2, title: "b 2", body: "d" },
    { id: 3, title: "c 3", body: "a" },
  ]);
  const [filter, setFilter] = useState({
    query: "",
    sort: "",
  });

  const [modal, setModal] = useState(false);

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.query.toLowerCase())
    );
  }, [filter.query, sortedPosts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (id) => {
    setPosts(posts.filter((p) => p.id !== id));
  };

  return (
    <div className="App">
      <MyButton style={{ marginTop: "20px" }} onClick={() => setModal(true)}>
        Create something
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ marginTop: "10px", marginBottom: "5px" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList posts={sortedAndSearchedPosts} removePost={removePost} />
    </div>
  );
}

export default App;
