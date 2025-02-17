import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../routers";
import MainLayout from "../layouts/MainLayout";
import { AuthContext } from "../context";
import { useContext } from "react";
import Loader from "./UI/loader/Loader";


const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext);
  console.log(isAuth);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {isAuth ? (
            <Route>
              {privateRoutes.map((route) => (
                <Route
                  exact={route.exact}
                  path={route.path}
                  element={route.element}
                  key={route.path}
                />
              ))}
              <Route element={<Navigate replace to={"/posts"} />} />;
            </Route>
          ) : (
            <Route>
              {publicRoutes.map((route) => (
                <Route
                  exact={route.exact}
                  path={route.path}
                  element={route.element}
                  key={route.path}
                />
              ))}
              <Route index element={<Navigate replace to={"/login"} />} />
            </Route>
          )}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
