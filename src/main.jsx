import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Card, Cart, Home, Layout } from "./components/index.js";
import { Provider } from "react-redux";
import Store from "./app/Store.js";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="card" element={<Card />} />
      <Route path="cart" element={<Cart />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={Store}>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </Provider>
);
