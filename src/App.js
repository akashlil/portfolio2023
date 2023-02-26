import React from "react";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes";

export default function App() {
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}
