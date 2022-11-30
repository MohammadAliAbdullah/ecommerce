import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";

function App() {
  const routers = createBrowserRouter(routes);
  return (
    <div>
      <RouterProvider router={routers} />
    </div>
  );
}

export default App;