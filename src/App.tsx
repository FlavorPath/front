import { RouterProvider, createBrowserRouter } from "react-router-dom";
import router from "./routes/router";
import Layout from "./ui/components/layout/Layout";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from './utils/queryClient';

function App() {
  const appRouter = createBrowserRouter(router);

  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <RouterProvider router={appRouter} />
      </Layout>
    </QueryClientProvider>
  );
}

export default App;
