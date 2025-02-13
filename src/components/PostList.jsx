// import { CSSTransition, TransitionGroup } from "react-transition-group";
// import PostItem from "./PostItem";

// const PostList = ({ posts, removePost }) => {
//   if (!posts.length) {
//     return <h1 style={{ textAlign: "center", color: "red" }}>List is empty</h1>;
//   }

//   return (
//     <div>
//       <h1 style={{ textAlign: "center" }}>List of posts</h1>
//       <TransitionGroup>
//         {posts.map((post, i) => (
//           <CSSTransition key={post.id} timeout={500} classNames="post">
//             <PostItem post={post} i={i} removePost={removePost} />
//           </CSSTransition>
//         ))}
//       </TransitionGroup>
//     </div>
//   );
// };

// export default PostList;

import React, { createRef } from "react";
import PostItem from "./PostItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const PostList = ({ posts, removePost }) => {
  if (!posts.length) {
    return <h1 style={{ textAlign: "center" }}>There are no posts here!</h1>;
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>List of posts</h1>
      <TransitionGroup>
        {posts.map((post, index) => {
          const nodeRef = createRef(null);
          return (
            <CSSTransition
              key={post.id}
              nodeRef={nodeRef}
              timeout={500}
              classNames="post"
            >
              <PostItem
                ref={nodeRef}
                removePost={removePost}
                number={index + 1}
                post={post}
              />
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </div>
  );
};

export default PostList;
