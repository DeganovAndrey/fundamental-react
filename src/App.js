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
import { getPageCount, getPagesArray } from "./utils/pages";
import Pagination from "./components/UI/pagination/Pagination";

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
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const [fetchPosts, isPostsLoading, postError] = useFetching(
    async (limit, page) => {
      const response = await PostService.getAll(limit, page);
      setPosts(response.data);
      const totalCount = response.headers["x-total-count"];
      setTotalPages(getPageCount(totalCount, limit));
    }
  );

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (id) => {
    setPosts(posts.filter((p) => p.id !== id));
  };

  const changePage = (page) => {
    setPage(page);
    fetchPosts(limit, page);
  };

  useEffect(() => {
    fetchPosts(limit, page);
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
      <Pagination changePage={changePage} page={page} totalPages={totalPages} />
    </div>
  );
}

export default App;
