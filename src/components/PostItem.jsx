import MyButton from "./UI/button/MyButton";

const PostItem = (props) => {
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {props.i + 1}. {props.post.title}
        </strong>
        <div>{props.post.body}</div>
      </div>
      <div className="post__btns">
        <MyButton onClick={() => props.removePost(props.post.id)}>
          Delete
        </MyButton>
      </div>
    </div>
  );
};

export default PostItem;
