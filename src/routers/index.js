import Error from "../components/UI/Error/Error";
import About from "../pages/About";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";

export const routes = [
  { path: "/", element: <Posts />, exact: true },
  { path: "/posts", element: <Posts />, exact: true },
  { path: "/posts/:id", element: <PostIdPage />, exact: true },
  { path: "/about", element: <About />, exact: true },
  { path: "*", element: <Error />, exact: true },
];

// <Routes>
//   <Route path="/" element={<MainLayout />}>
//   <Route index element={<Navbar />} />

//   <Route path="posts" element={<Posts />} />
//     <Route path="posts/:id" element={<PostIdPage />} />
//     <Route path="about" element={<About />} />
//     <Route path="*" element={<Posts />} />
//    </Route>
// </Routes>
