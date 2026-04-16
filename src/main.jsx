import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router";
import { router } from "./router/Routes.jsx";
import { ToastContainer } from "react-toastify";
import FriendsProvider from "./context/FriendsProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FriendsProvider>
      <RouterProvider router={router} />
      <ToastContainer autoClose={1500}/>
    </FriendsProvider>
  </StrictMode>,
);
