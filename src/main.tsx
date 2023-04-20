import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./components/pages/Home/Home";
import { BookPage } from "./components/pages/BookPage/BookPage";
import { ProfilePage } from "./components/pages/ProfilePage/ProfilePage";
import { LoginPage } from "./components/pages/LoginPage/LoginPage";
import { WelcomePage } from "./components/pages/WelcomePage/WelcomePage";
import { RegisterPage } from "./components/pages/RegisterPage/RegisterPage";

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
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
