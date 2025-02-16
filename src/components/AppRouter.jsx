import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "../routers";
import MainLayout from "../layouts/MainLayout";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {routes.map((route) => (
            <Route
              exact={route.exact}
              path={route.path}
              element={route.element}
            ></Route>
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
