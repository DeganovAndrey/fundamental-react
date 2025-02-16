import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Navbar from "./components/UI/navbar/Navbar";
import MainLayout from "./layouts/MainLayout";
import Error from "./components/UI/Error/Error";
import "./App.css";
import PostIdPage from "./pages/PostIdPage";
import AppRouter from "./components/AppRouter";
import React from "react";

function App() {
  return <AppRouter />;
}
export default App;
