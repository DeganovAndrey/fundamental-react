import { useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

const PostForm = ({ create }) => {
  const [post, setPost] = useState({
    title: "",
    body: "",
  });

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    setPost({ title: "", body: "" });
    create(newPost);
  };

  return (
    <form>
      <MyInput
        type="text"
        placeholder="Name of post"
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
      />

      <MyInput
        type="text"
        placeholder="Description post"
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
      />
      <MyButton style={{ marginBottom: "10px" }} onClick={addNewPost}>
        Create new post
      </MyButton>
    </form>
  );
};

export default PostForm;
