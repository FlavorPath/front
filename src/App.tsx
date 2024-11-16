import { RouterProvider, createBrowserRouter } from "react-router-dom";
import router from "./routes/router";

function App() {
  const appRouter = createBrowserRouter(router);

  return <RouterProvider router={appRouter} />;
}

export default App;
