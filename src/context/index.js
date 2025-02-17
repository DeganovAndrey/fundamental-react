import { createContext } from "react";

export const AuthContext = createContext(null);


// import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
// import { privateRoutes, publicRoutes } from "../routers";
// import MainLayout from "../layouts/MainLayout";
// import { AuthContext } from "../context";
// import { useContext } from "react";
// import Login from "../pages/Login"; // предполагаем, что у вас есть компонент Login

// const AppRouter = () => {
//   const { isAuth } = useContext(AuthContext);

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<MainLayout />}>
//           <Route
//             index
//             element={<Navigate replace to={isAuth ? "/posts" : "/login"} />}
//           />{" "}
//           {/* перенаправление на posts или login */}
//           {isAuth
//             ? privateRoutes.map((route) => (
//                 <Route
//                   key={route.path}
//                   path={route.path}
//                   element={route.element}
//                 />
//               ))
//             : publicRoutes.map((route) => (
//                 <Route
//                   key={route.path}
//                   path={route.path}
//                   element={route.element}
//                 />
//               ))}
//           <Route path="*" element={<Navigate replace to="/posts" />} />{" "}
//           {/* обработка не найденных страниц */}
//         </Route>
//         <Route path="/login" element={<Login />} />
//         <Route path="/notfound" element={<h1>404 Not Found</h1>} />{" "}
//         {/* Страница 404 */}
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default AppRouter;
