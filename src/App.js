import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRouter from "./components/AppRouter";
import React, { useEffect, useState } from "react";
import { AuthContext } from "./context";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (localStorage.getItem("auth")) {
      return setIsAuth(true);
    }
    setIsLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth, isLoading }}>
      <AppRouter />
    </AuthContext.Provider>
  );
}
export default App;
