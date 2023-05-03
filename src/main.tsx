import { FavoriteBooks } from "./components/pages/FavoriteBooks/FavoriteBooks";
import { RegisterPage } from "./components/pages/RegisterPage/RegisterPage";
import { ProfilePage } from "./components/pages/ProfilePage/ProfilePage";
import { WelcomePage } from "./components/pages/WelcomePage/WelcomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UploadBook } from "./components/pages/UploadBook/UploadBook";
import { LoginPage } from "./components/pages/LoginPage/LoginPage";
import { BookPage } from "./components/pages/BookPage/BookPage";
import { Home } from "./components/pages/Home/Home";
import ReactDOM from "react-dom/client";
import React from "react";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/book/:id",
    element: <BookPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/",
    element: <WelcomePage />,
  },
  {
    path: "/upload",
    element: <UploadBook />,
  },
  {
    path: "/favorite",
    element: <FavoriteBooks />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
