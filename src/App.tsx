import { RouterProvider, createBrowserRouter } from "react-router-dom";
import router from "./routes/router";
import Layout from './ui/components/layout/Layout';

function App() {
  const appRouter = createBrowserRouter(router);

  return (
    <Layout>
      <RouterProvider router={appRouter} />
    </Layout>
  );
}

export default App;
