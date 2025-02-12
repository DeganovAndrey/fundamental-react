import PostItem from "./PostItem";

const PostList = ({ posts, removePost }) => {
  if (!posts.length) {
    return <h1 style={{ textAlign: "center", color: "red" }}>List is empty</h1>;
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>List of posts</h1>
      {posts.map((post, i) => (
        <PostItem post={post} key={post.id} i={i} removePost={removePost} />
      ))}
    </div>
  );
};

export default PostList;
