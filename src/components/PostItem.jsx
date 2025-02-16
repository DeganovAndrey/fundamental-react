// import MyButton from "./UI/button/MyButton";

// const PostItem = (props) => {
//   return (
//     <div className="post">
//       <div className="post__content">
//         <strong>
//           {props.i + 1}. {props.post.title}
//         </strong>
//         <div>{props.post.body}</div>
//       </div>
//       <div className="post__btns">
//         <MyButton onClick={() => props.removePost(props.post.id)}>
//           Delete
//         </MyButton>
//       </div>
//     </div>
//   );
// };

// export default PostItem;

import React from "react";
import { useNavigate } from "react-router-dom";
import MyButton from "./UI/button/MyButton";

const PostItem = React.forwardRef((props, ref) => {
  const navigate = useNavigate();

  const transitToPost = (id) => {
    navigate(`/posts/${id}`, { replace: true });
  };

  return (
    <div ref={ref} className="post">
      <div className="post__content">
        <strong>
          {props.post.id}. {props.post.title}
        </strong>
        <div>{props.post.body}</div>
      </div>
      <div className="post__btns">
        <MyButton onClick={() => transitToPost(props.post.id)}>Open</MyButton>
        <MyButton onClick={() => props.removePost(props.post.id)}>
          Delete
        </MyButton>
      </div>
    </div>
  );
});

export default PostItem;
